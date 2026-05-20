import { createFileRoute } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageProvider";
import { stops } from "@/data/stops";
import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";
import { Download, Printer } from "lucide-react";

export const Route = createFileRoute("/admin/qr")({
  component: QRPage,
  head: () => ({
    meta: [
      { title: "QR Code Generator · Admin Navelli" },
      { name: "robots", content: "noindex" },
    ],
  }),
});

function QRPage() {
  const { t, tField } = useT();
  const [origin, setOrigin] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") setOrigin(window.location.origin);
  }, []);

  const print = () => typeof window !== "undefined" && window.print();

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-6 no-print">
        <div>
          <h1 className="font-display text-4xl md:text-5xl font-bold">{t("qr_title")}</h1>
          <p className="text-muted-foreground mt-1">{t("qr_desc")}</p>
        </div>
        <button
          onClick={print}
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full font-semibold"
        >
          <Printer className="w-4 h-4" /> {t("qr_print_sheet")}
        </button>
      </div>

      <div className="qr-print-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {stops.map((s) => (
          <QRItem key={s.id} url={`${origin}/stop/${s.id}`} number={s.stopNumber} name={tField(s.name)} downloadLabel={t("qr_download")} />
        ))}
      </div>
    </div>
  );
}

function QRItem({ url, number, name, downloadLabel }: { url: string; number: number; name: string; downloadLabel: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [dataUrl, setDataUrl] = useState<string>("");

  useEffect(() => {
    if (!url || !ref.current) return;
    QRCode.toCanvas(ref.current, url, { width: 280, margin: 1, color: { dark: "#2C2416", light: "#F5F0E8" } });
    QRCode.toDataURL(url, { width: 600, margin: 2, color: { dark: "#2C2416", light: "#ffffff" } }).then(setDataUrl);
  }, [url]);

  return (
    <article className="stone-card rounded-2xl p-5 text-center break-inside-avoid">
      <canvas ref={ref} className="mx-auto rounded-lg" />
      <div className="mt-3 flex items-center gap-2 justify-center">
        <span className="gold-badge w-7 h-7 rounded-full grid place-items-center text-sm">{number}</span>
        <h3 className="font-display font-bold text-sm leading-tight">{name}</h3>
      </div>
      <p className="text-[10px] text-muted-foreground mt-1 truncate" title={url}>{url}</p>
      {dataUrl && (
        <a
          href={dataUrl}
          download={`qr-navelli-${number}.png`}
          className="no-print mt-3 inline-flex items-center gap-1.5 bg-secondary hover:bg-primary hover:text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold transition-colors"
        >
          <Download className="w-3.5 h-3.5" /> {downloadLabel}
        </a>
      )}
    </article>
  );
}
