import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PagePlaceholder({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <>
      <Header />
      <main className="flex flex-1 items-center">
        <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
          <h1 className="font-serif text-3xl font-semibold tracking-wide text-neutral-900 uppercase sm:text-4xl">
            {title}
          </h1>
          <div className="mx-auto mt-4 h-px w-16 bg-accent" />
          <p className="mt-6 text-sm leading-relaxed text-neutral-600 sm:text-base">
            {description}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
