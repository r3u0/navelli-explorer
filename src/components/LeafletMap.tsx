import { useEffect, useRef, useState } from "react";
import { type Stop, NAVELLI_CENTER } from "@/data/stops";
import type { Hospitality } from "@/data/hospitality";
import { type Service, SERVICE_META } from "@/data/services";
import { useT } from "@/i18n/LanguageProvider";

interface Props {
  stops: Stop[];
  showRoute?: boolean;
  showUserLocation?: boolean;
  hospitality?: Hospitality[];
  bars?: Hospitality[]; // sempre visibili, marker teal
  services?: Service[];
  height?: string;
  focusStopId?: string;
  zoom?: number;
}

export function LeafletMap({
  stops,
  showRoute = false,
  showUserLocation = false,
  hospitality,
  bars,
  services,
  height = "70vh",
  focusStopId,
  zoom,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { tField, t } = useT();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!mounted || !ref.current || typeof window === "undefined") return;
    let map: import("leaflet").Map | null = null;
    let cancelled = false;

    (async () => {
      const L = await import("leaflet");
      if (cancelled || !ref.current) return;

      const focusStop = focusStopId ? stops.find((s) => s.id === focusStopId) : null;
      const center: [number, number] = focusStop
        ? [focusStop.coordinates.lat, focusStop.coordinates.lng]
        : [NAVELLI_CENTER.lat, NAVELLI_CENTER.lng];

      map = L.map(ref.current, { scrollWheelZoom: true }).setView(center, zoom ?? (focusStop ? 18 : 16));

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
        maxZoom: 19,
      }).addTo(map);

      stops.forEach((s) => {
        const isFocus = s.id === focusStopId;
        const icon = L.divIcon({
          className: "",
          html: `<div class="numbered-marker" style="${isFocus ? "transform: scale(1.25); outline: 3px solid white; outline-offset: 2px;" : ""}">${s.stopNumber}</div>`,
          iconSize: [36, 36],
          iconAnchor: [18, 18],
        });
        const m = L.marker([s.coordinates.lat, s.coordinates.lng], { icon }).addTo(map!);
        const popupHtml = `
          <div style="min-width:200px; font-family: Inter, sans-serif;">
            <div style="font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:#8a7a55;">${t("stop")} ${s.stopNumber}</div>
            <div style="font-family: 'Playfair Display', serif; font-size:16px; font-weight:700; margin:2px 0 6px;">${tField(s.name)}</div>
            <div style="font-size:13px; color:#444; margin-bottom:8px;">${tField(s.shortDescription)}</div>
            <a href="/stop/${s.id}" style="display:inline-block; background:#C1440E; color:white; padding:6px 12px; border-radius:6px; font-size:12px; text-decoration:none; font-weight:600;">${t("discover_more")} →</a>
          </div>`;
        m.bindPopup(popupHtml);
        if (isFocus) m.openPopup();
      });

      if (showRoute && stops.length > 1) {
        const ordered = [...stops].sort((a, b) => a.stopNumber - b.stopNumber);
        // Split the route into segments per area so the inter-village drive isn't drawn as a walkable line.
        let segment: [number, number][] = [];
        let currentArea: string | null = null;
        const flush = () => {
          if (segment.length > 1) {
            L.polyline(segment, {
              color: "#E8A020",
              weight: 3,
              opacity: 0.9,
              dashArray: "8 6",
            }).addTo(map!);
          }
          segment = [];
        };
        ordered.forEach((s) => {
          if (s.area !== currentArea) {
            flush();
            currentArea = s.area;
          }
          segment.push([s.coordinates.lat, s.coordinates.lng]);
        });
        flush();
      }

      // Always-visible BAR markers (teal cocktail icons)
      if (bars?.length) {
        bars.forEach((b) => {
          const icon = L.divIcon({
            className: "",
            html: `<div class="bar-marker" title="${b.name}">🍹</div>`,
            iconSize: [32, 32],
            iconAnchor: [16, 16],
          });
          const m = L.marker([b.coordinates.lat, b.coordinates.lng], { icon }).addTo(map!);
          const phoneHtml = b.phone
            ? `<a href="tel:${b.phone.replace(/\s+/g, "")}" style="color:#0D9488; font-weight:600; text-decoration:none;">📞 ${b.phone}</a><br/>`
            : "";
          m.bindPopup(`
            <div style="min-width:200px; font-family:Inter,sans-serif;">
              <div style="font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:#0D9488; font-weight:700;">${b.subtype}</div>
              <div style="font-family:'Playfair Display',serif; font-size:15px; font-weight:700; margin:2px 0 6px;">${b.name}</div>
              <div style="font-size:12px; color:#555; margin-bottom:6px;">${b.address}</div>
              ${phoneHtml}
              <div style="font-size:12px; color:#444; margin-top:4px;">${tField(b.description)}</div>
            </div>`);
        });
      }

      // Optional hospitality layer (sleep / eat)
      if (hospitality?.length) {
        hospitality.forEach((h) => {
          const emoji = h.type === "sleep" ? "🛏" : h.type === "eat" ? "🍽" : "🍺";
          const cls = h.type === "sleep" ? "sleep" : "eat";
          const icon = L.divIcon({
            className: "",
            html: `<div class="hospitality-marker ${cls}">${emoji}</div>`,
            iconSize: [28, 28],
            iconAnchor: [14, 14],
          });
          const m = L.marker([h.coordinates.lat, h.coordinates.lng], { icon }).addTo(map!);
          m.bindPopup(
            `<div style="min-width:180px; font-family:Inter,sans-serif;">
              <div style="font-weight:700; font-size:14px;">${h.name}</div>
              <div style="font-size:12px; color:#666;">${h.subtype}</div>
              <div style="font-size:11px; margin-top:4px;">${h.address}</div>
            </div>`,
          );
        });
      }
      // Essential services (municipio, farmacia, posta, carabinieri, guardia medica)
      if (services?.length) {
        services.forEach((sv) => {
          const meta = SERVICE_META[sv.type];
          const icon = L.divIcon({
            className: "",
            html: `<div class="service-marker" style="background:${meta.color};" title="${meta.label}">${meta.emoji}</div>`,
            iconSize: [30, 30],
            iconAnchor: [15, 15],
          });
          const m = L.marker([sv.coordinates.lat, sv.coordinates.lng], { icon }).addTo(map!);
          const phoneHtml = sv.phone
            ? `<a href="tel:${sv.phone.replace(/\s+/g, "")}" style="color:${meta.color}; font-weight:600; text-decoration:none;">📞 ${sv.phone}</a><br/>`
            : "";
          m.bindPopup(`
            <div style="min-width:200px; font-family:Inter,sans-serif;">
              <div style="font-size:11px; letter-spacing:.1em; text-transform:uppercase; color:${meta.color}; font-weight:700;">${meta.label}</div>
              <div style="font-family:'Playfair Display',serif; font-size:15px; font-weight:700; margin:2px 0 6px;">${sv.name}</div>
              <div style="font-size:12px; color:#555; margin-bottom:6px;">${sv.address}</div>
              ${phoneHtml}
            </div>`);
        });
      }


      if (showUserLocation && "geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((pos) => {
          if (!map) return;
          const icon = L.divIcon({
            className: "",
            html: `<div class="user-pulse"></div>`,
            iconSize: [18, 18],
            iconAnchor: [9, 9],
          });
          L.marker([pos.coords.latitude, pos.coords.longitude], { icon }).addTo(map);
        });
      }

      if (!focusStop && stops.length > 1) {
        const bounds = L.latLngBounds(stops.map((s) => [s.coordinates.lat, s.coordinates.lng]));
        map.fitBounds(bounds, { padding: [40, 40] });
      }
    })();

    return () => {
      cancelled = true;
      if (map) map.remove();
    };
  }, [mounted, stops, hospitality, bars, services, showRoute, showUserLocation, focusStopId, zoom, t, tField]);

  return (
    <div
      ref={ref}
      style={{ height }}
      className="relative isolate z-0 w-full rounded-2xl overflow-hidden border border-border shadow-lg bg-secondary"
    />
  );
}
