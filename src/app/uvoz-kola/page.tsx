import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Uvoz kola | AM Motors",
};

export default function UvozKolaPage() {
  return (
    <PagePlaceholder
      title="Uvoz kola"
      description="Informacije o uvozu vozila po porudžbini uskoro stižu na ovu stranicu."
    />
  );
}
