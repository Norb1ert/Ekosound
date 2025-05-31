import OfferCard from "./components/OfferCard";

function Offer() {
  return (
    <section id="services" className="py-20 text-center bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-orange-500 tracking-widest uppercase md:text-4xl lg:text-6xl">
        Nasze usługi
      </h2>
      <p className="text-xl font-bold pb-14 text-slate-600 md:text-2xl lg:text-4xl">
        Oferujemy szeroką gamę rozwiązań
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:gap-10 md:gap-10 gap-8 px-5 place-items-center">
        <OfferCard
          title="Mapy Hałasu"
          alternative="offer photo"
          imagePath="mapa.png"
          description="Tworzymy szczegółowe mapy hałasu na potrzeby rożnych inwestycji"
          date="12.04.2023"
      />
     <OfferCard
          title="Analiza Porealizacyjna"
          alternative="offer photo"
          imagePath="analiza.png"
          description="Oceniamy zgodność inwestycji z normami środowiskowymi po zakończeniu budowy."
          date="05.08.2022"
      />
      <OfferCard
          title="Modele Dróg"
          alternative="offer photo"
          imagePath="model.jpg"
          description="Tworzymy modele akustyczne dróg w celu prognozowania wpływu hałasu na otoczenie."
          date="01.03.2024"
      />
      <OfferCard
          title="Pomiary Hałasu"
          alternative="offer photo"
          imagePath="pomiar.png"
          description="Wykonujemy profesjonalne pomiary hałasu w środowisku zewnętrznym i wewnętrznym."
          date="30.06.2023"
      />
  </div>
</section>
  );
}

export default Offer;
