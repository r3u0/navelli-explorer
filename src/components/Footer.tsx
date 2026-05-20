import { useT } from "@/i18n/LanguageProvider";
import { Castle } from "lucide-react";

export function Footer() {
  const { t } = useT();
  return (
    <footer className="mt-20 border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Castle className="w-4 h-4 text-primary" />
          <span>{t("footer_made")}</span>
        </div>
        <div className="text-center sm:text-right">
          <p className="font-display text-foreground">{t("footer_borghi")}</p>
          <p className="text-xs">© {new Date().getFullYear()} Navelli · Abruzzo · Italia</p>
        </div>
      </div>
    </footer>
  );
}
