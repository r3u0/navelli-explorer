import { useState } from "react";
import { useT } from "@/i18n/LanguageProvider";
import { CalendarCheck, MessageCircle, Mail, Phone, X } from "lucide-react";

const WHATSAPP = "+39 377 101 7741";
const EMAIL = "prolocodinavelli@gmail.com";
const PHONE = "+39 0862 95 91 58";

export function BookVisitButton({ stopName }: { stopName: string }) {
  const { t } = useT();
  const [open, setOpen] = useState(false);

  const waText = encodeURIComponent(
    `Salve, vorrei prenotare una visita guidata per: ${stopName}. Grazie.`,
  );
  const mailSubject = encodeURIComponent(`Prenotazione visita — ${stopName}`);

  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-2.5 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-md"
      >
        <CalendarCheck className="w-4 h-4" />
        {t("book_visit")}
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            className="fixed left-1/2 top-1/2 z-50 w-[92%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-card p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <p className="font-display text-lg font-bold">{t("booking_required_title")}</p>
                <p className="text-xs text-muted-foreground mt-1">{t("booking_choose")}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="p-1.5 rounded-full hover:bg-secondary"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5">
              <a
                href={`https://wa.me/${WHATSAPP.replace(/\D/g, "")}?text=${waText}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-border p-3 hover:bg-secondary transition-colors"
              >
                <span className="grid place-items-center w-10 h-10 rounded-full bg-[#25D366]/15 text-[#1f8a4c]">
                  <MessageCircle className="w-5 h-5" />
                </span>
                <span className="flex-1">
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground font-bold">
                    {t("booking_whatsapp")}
                  </span>
                  <span className="block font-semibold">{WHATSAPP}</span>
                </span>
              </a>

              <a
                href={`mailto:${EMAIL}?subject=${mailSubject}`}
                className="flex items-center gap-3 rounded-xl border border-border p-3 hover:bg-secondary transition-colors"
              >
                <span className="grid place-items-center w-10 h-10 rounded-full bg-primary/15 text-primary">
                  <Mail className="w-5 h-5" />
                </span>
                <span className="flex-1">
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground font-bold">
                    {t("booking_email")}
                  </span>
                  <span className="block font-semibold break-all">{EMAIL}</span>
                </span>
              </a>

              <a
                href={`tel:${PHONE.replace(/\s+/g, "")}`}
                className="flex items-center gap-3 rounded-xl border border-border p-3 hover:bg-secondary transition-colors"
              >
                <span className="grid place-items-center w-10 h-10 rounded-full bg-accent/20 text-accent-foreground">
                  <Phone className="w-5 h-5" />
                </span>
                <span className="flex-1">
                  <span className="block text-xs uppercase tracking-widest text-muted-foreground font-bold">
                    {t("booking_phone")}
                  </span>
                  <span className="block font-semibold">{PHONE}</span>
                </span>
              </a>
            </div>

            <p className="mt-4 text-xs italic text-muted-foreground">{t("booking_notice")}</p>
          </div>
        </>
      )}
    </div>
  );
}
