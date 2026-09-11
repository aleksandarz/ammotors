import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Otkup vozila | AM Motors",
};

export default function ProdajaKolaPage() {
  return (
    <PagePlaceholder
      title="Otkup vozila"
      description="Ponuda vozila iz otkupa uskoro stiže na ovu stranicu."
    />
  );
}
