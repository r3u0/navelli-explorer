import { Link, useLocation } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useState } from "react";
import { Menu, X, Castle } from "lucide-react";

const nav = [
  { to: "/", key: "nav_home" },
  { to: "/tour", key: "nav_tour" },
  { to: "/stops", key: "nav_stops" },
  { to: "/map", key: "nav_map" },
  { to: "/events", key: "nav_events" },
  { to: "/food", key: "nav_food" },
  { to: "/hospitality", key: "nav_hospitality" },
  { to: "/getting-here", key: "nav_getting_here" },
] as const;

export function Header() {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <header className="sticky top-0 z-[1000] isolate backdrop-blur-md bg-background/85 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="grid place-items-center w-9 h-9 rounded-full bg-gradient-to-br from-primary to-accent text-white shadow-md">
            <Castle className="w-5 h-5" />
          </span>
          <span className="font-display font-bold text-xl tracking-tight">Navelli</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((n) => {
            const active = loc.pathname === n.to;
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`px-3 py-1.5 text-sm rounded-full transition-colors ${
                  active
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                {t(n.key)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <button
            className="lg:hidden p-2 rounded-md hover:bg-secondary"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-card">
          <nav className="flex flex-col p-2">
            {nav.map((n) => {
              const active = loc.pathname === n.to;
              return (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm ${
                    active ? "bg-primary text-primary-foreground" : "hover:bg-secondary"
                  }`}
                >
                  {t(n.key)}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
