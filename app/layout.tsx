import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Connect With Us | AAM POWER",
  description:
    "Follow AAM POWER on Facebook, Instagram and YouTube, chat with us on WhatsApp, or find us on Google Maps.",
  metadataBase: new URL("https://aampower.com.pk"),
  openGraph: {
    title: "Connect With AAM POWER",
    description:
      "Follow us, stay connected, and find AAM POWER across our official platforms.",
    siteName: "AAM POWER",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body>{children}</body>
    </html>
  );
}
