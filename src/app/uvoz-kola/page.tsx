import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Uvoz vozila | AM Motors",
};

export default function UvozKolaPage() {
  return (
    <PagePlaceholder
      title="Uvoz vozila"
      description="Informacije o uvozu vozila po porudžbini uskoro stižu na ovu stranicu."
    />
  );
}
