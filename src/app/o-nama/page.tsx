import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "O nama",
  description:
    "AM Motors — otkup, prodaja i uvoz vozila iz Beograda. Upoznajte naš tim i saznajte zašto nam klijenti veruju.",
  alternates: {
    canonical: "/o-nama",
  },
};

export default function ONamaPage() {
  return (
    <PagePlaceholder
      title="O nama"
      description="Priča o AM Motors uskoro stiže na ovu stranicu."
    />
  );
}
