import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Prodaja kola | AM Motors",
};

export default function ProdajaKolaPage() {
  return (
    <PagePlaceholder
      title="Prodaja kola"
      description="Ponuda vozila iz prodaje uskoro stiže na ovu stranicu."
    />
  );
}
