import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eva Balance | Bienestar elegido con intención",
  description: "Una selección consciente de productos para crear pequeños rituales de bienestar en tu día a día.",
  icons: { icon: [{ url: "/heart-eva.svg", type: "image/svg+xml" }] },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es"><body>{children}</body></html>
  );
}
