import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { SiteNav } from "@/components/SiteNav";
import { Footer } from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Digiformation Ltd | UK & US Company Formation Services",
  description:
    "Fast, professional UK & US company formation, shelf companies, banking, and payment solutions for entrepreneurs worldwide.",
  keywords: [
    "UK Company Formation",
    "US LLC Formation",
    "UK Shelf Companies",
    "Business Banking",
    "Company Registration",
  ],
  openGraph: {
    title: "Digiformation Ltd",
    description:
      "Register your UK or US company in days. Professional, fast, and fully compliant.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable}`}
      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;800&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased"
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          background: "#0a0a0a",
          color: "#ffffff",
        }}
      >
        <Providers>
          <div className="min-h-screen flex flex-col">
            <SiteNav />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
