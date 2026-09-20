import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import SplitFeatureSection from "@/components/SplitFeatureSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <AboutSection />
        <SplitFeatureSection
          id="otkup-prodaja"
          title={["OTKUP VOZILA"]}
          description="Otkupljujemo sve vrste vozila – ispravna, neispravna i havarisana, bez obzira na marku, model ili godište. Izlazimo na teren, radimo besplatnu procenu i isplaćujemo odmah, u kešu, bez čekanja i suvišne papirologije. Kako otkup podrazumeva brzu isplatu i preuzimanje svih obaveza oko vozila, otkupna cena je niža od tržišne vrednosti – to je cena koju plaćamo za brzinu, jednostavnost i sigurnost celog procesa."
          ctaLabel="Saznajte više"
          ctaHref="/prodaja-kola"
          imageSrc="/images/otkup-prodaja.jpg"
          imageAlt="Otkup i prodaja vozila u AM Motors"
          imagePosition="left"
        />
        <SplitFeatureSection
          id="uvoz-vozila"
          title={["UVOZ VOZILA"]}
          description="Pored otkupa i prodaje, bavimo se i uvozom vozila iz Evrope, prvenstveno iz Nemačke. U dogovoru s vama pronalazimo vozilo koje odgovara vašim željama i budžetu i sprovodimo vas kroz ceo proces – od odabira i kupovine, preko uvoza, sve do dostavljanja vozila na vašu kućnu adresu."
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
