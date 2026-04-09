import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PulseAudit | Digital Health Dashboard",
  description: "Your comprehensive digital health audit.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mesh-bg" />
        {children}
      </body>
    </html>
  );
}
