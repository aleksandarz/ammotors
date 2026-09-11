import type { Metadata } from "next";
import PagePlaceholder from "@/components/PagePlaceholder";

export const metadata: Metadata = {
  title: "O nama | AM Motors",
};

export default function ONamaPage() {
  return (
    <PagePlaceholder
      title="O nama"
      description="Priča o AM Motors uskoro stiže na ovu stranicu."
    />
  );
}
