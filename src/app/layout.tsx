import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${site.name} | Imported Branded Laptops Gulberg Lahore`,
  description:
    "Shop with Hope — imported branded Dell, HP, Lenovo and Microsoft laptops in Gulberg III, Lahore. Nationwide delivery. WhatsApp for price.",
  metadataBase: new URL(`https://${site.domain}`),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} h-full`}>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
