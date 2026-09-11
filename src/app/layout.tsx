import type { Metadata } from "next";
import { Inter, Italiana } from "next/font/google";
import "./globals.css";

// Italiana only ships a "latin" subset (no latin-ext), so it has no
// č/ć/š/ž/đ glyphs. Inter stays loaded as a silent fallback: the browser
// automatically pulls just those missing characters from it while every
// other character renders in Italiana.
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const italiana = Italiana({
  variable: "--font-italiana",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AM Motors",
  description: "AM Motors — prodaja i uvoz automobila.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="sr"
      className={`${inter.variable} ${italiana.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        {children}
      </body>
    </html>
  );
}
