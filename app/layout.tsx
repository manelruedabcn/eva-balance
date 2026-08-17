import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({ variable: "--font-display", subsets: ["latin"], weight: ["400", "500", "600"] });
const sans = Manrope({ variable: "--font-sans", subsets: ["latin"], weight: ["400", "500", "600", "700"] });

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
    <html lang="es"><body className={`${display.variable} ${sans.variable}`}>{children}</body></html>
  );
}
