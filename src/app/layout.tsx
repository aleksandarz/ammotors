import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { siteName, siteUrl } from "@/lib/site";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

const description =
  "AM Motors iz Beograda: otkup, prodaja i uvoz vozila iz inostranstva. Brza i realna procena, isplata odmah, uvoz po narudžbini iz Evrope.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Otkup, prodaja i uvoz vozila`,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "otkup vozila",
    "otkup automobila",
    "prodaja vozila",
    "uvoz vozila",
    "uvoz automobila iz Nemačke",
    "AM Motors",
    "auto otkup Beograd",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: "/",
    siteName,
    title: `${siteName} — Otkup, prodaja i uvoz vozila`,
    description,
    images: [
      {
        url: "/images/otkup-prodaja.jpg",
        width: 1200,
        height: 800,
        alt: "AM Motors — otkup i prodaja vozila",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} — Otkup, prodaja i uvoz vozila`,
    description,
    images: ["/images/otkup-prodaja.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutomotiveBusiness",
  name: siteName,
  description,
  url: siteUrl,
  telephone: ["+381665938839", "+381611464997"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Luke Ćelovića Trebinjca",
    addressLocality: "Beograd",
    addressCountry: "RS",
  },
  sameAs: [
    "https://www.instagram.com/ammotors.rs",
    "https://facebook.com",
    "https://tiktok.com",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="sr" className={`${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
