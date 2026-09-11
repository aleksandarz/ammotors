import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "Kontakt | AM Motors",
};

export default function KontaktPage() {
  return (
    <PagePlaceholder
      title="Kontakt"
      description="Kontakt podaci i lokacija uskoro stižu na ovu stranicu."
    />
  );
}
