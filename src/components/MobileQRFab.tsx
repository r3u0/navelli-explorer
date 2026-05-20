import { Link } from "@tanstack/react-router";
import { QrCode } from "lucide-react";

export function MobileQRFab() {
  return (
    <Link
      to="/admin/qr"
      className="lg:hidden fixed bottom-5 right-5 z-30 flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-3 shadow-xl shadow-primary/30 active:scale-95 transition-transform no-print"
      aria-label="Scan QR admin"
    >
      <QrCode className="w-5 h-5" />
      <span className="text-sm font-semibold">QR</span>
    </Link>
  );
}
