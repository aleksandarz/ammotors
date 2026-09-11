import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SplitFeatureSection from "@/components/SplitFeatureSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <SplitFeatureSection
          id="otkup-prodaja"
          title={["OTKUP I PRODAJA", "VOZILA"]}
          description="AM Motors vrši profesionalnu procenu i otkup vozila po fer tržišnim uslovima, uz brzu isplatu i urednu papirologiju. Bilo da prodajete svoje vozilo ili tražite pouzdanog kupca, naš tim vas vodi kroz ceo proces — od procene do overe ugovora."
          ctaLabel="Saznajte više"
          ctaHref="/prodaja-kola"
          imageSrc="/images/otkup-prodaja.jpg"
          imageAlt="Otkup i prodaja vozila u AM Motors"
          imagePosition="left"
        />
        <SplitFeatureSection
          id="uvoz-vozila"
          title={["UVOZ VOZILA", "PO NARUDŽBINI"]}
          description="Pronalazimo i uvozimo vozila iz cele Evrope prema vašim željama i budžetu. Od pretrage i provere istorije vozila, preko carinjenja, do registracije — AM Motors vodi ceo proces uvoza umesto vas."
          ctaLabel="Saznajte više"
          ctaHref="/uvoz-kola"
          imageSrc="/images/uvoz-vozila.jpg"
          imageAlt="Uvoz vozila u AM Motors"
          imagePosition="right"
        />
      </main>
      <Footer />
    </>
  );
}
