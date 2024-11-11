import OfferCard from "./components/OfferCard";

function Offer() {
  return (
    <section id="services" className="py-20 text-center ">
      <h2 className="text-2xl font-bold mb-4 text-orange-500 tracking-widest uppercase md:text-4xl lg:text-6xl">
        Nasze usługi
      </h2>
      <p className="text-xl font-bold pb-10 text-slate-600 md:text-2xl lg:text-4xl">
        Oferujemy szeroką gamę produktów
      </p>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-80 md:gap-10 gap-8 px-5 place-items-center">
        <OfferCard
          title="Mapy Hałasu"
          alternative="offer photo"
          imagePath="offer.jpg"
          description="lorem asndlansdkbiasdkjabsdnansd"
          date="25.20.2002"
        />
        <OfferCard
          title="Mapy Hałasu"
          alternative="offer photo"
          imagePath="offer.jpg"
          description="lorem asndlansdkbiasdkjabsdnansd"
          date="25.20.2002"
        />
        <OfferCard
          title="Mapy Hałasu"
          alternative="offer photo"
          imagePath="offer.jpg"
          description="lorem asndlansdkbiasdkjabsdnansd"
          date="25.20.2002"
        />
      </div>
    </section>
  );
}

export default Offer;
