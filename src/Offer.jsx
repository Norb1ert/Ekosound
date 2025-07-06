import { useState } from "react";
import { motion } from "framer-motion";
import OfferCard from "./components/OfferCard";

const cards = [
  {
    title: "Mapy Hałasu",
    description: "Tworzymy szczegółowe mapy hałasu zgodne z obowiązującymi normami akustycznymi, przydatne w planowaniu przestrzennym.",
    imagePath: "offer-image.jpg",
    alt: "Mapa"
  },
  {
    title: "Analiza Porealizacyjna",
    description: "Przeprowadzamy analizy porealizacyjne projektów infrastrukturalnych, weryfikując zgodność z założeniami środowiskowymi.",
    imagePath: "offer-image.jpg",
    alt: "Analiza"
  },
  {
    title: "Modele Dróg",
    description: "Opracowujemy modele 3D układów drogowych, hałas i analizy środowiskowe. Wspierają proces planowania inwestycji.",
    imagePath: "offer-image.jpg",
    alt: "Model"
  },
  {
    title: "Pomiary Hałasu",
    description: "Wykonujemy pomiary hałasu komunikacyjnego i przemysłowego z użyciem certyfikowanego sprzętu i zgodnie z normami.",
    imagePath: "offer-image.jpg",
    alt: "Pomiar"
  },
  {
    title: "Kolejna Usługa",
    description: "Oferujemy konsultacje środowiskowe dla inwestorów oraz pomoc w uzyskaniu decyzji o środowiskowych uwarunkowaniach.",
    imagePath: "offer-image.jpg",
    alt: "Pomiar"
  },
  {
    title: "Kolejna Usługa",
    description: "Oferujemy konsultacje środowiskowe oraz pomoc w uzyskaniu decyzji. Współpracujemy z jednostkami samorządowymi i biurami projektowymi.",
    imagePath: "offer-image.jpg",
    alt: "Pomiar"
  },
  {
    title: "Ostatnia",
    description: "Realizujemy projekty związane z ochroną środowiska akustycznego, od analiz po wdrażanie rozwiązań wygłuszających.",
    imagePath: "offer-image.jpg",
    alt: "Pomiar"
  },
];


const CARD_WIDTH = 320; 
const VISIBLE_CARDS = 3;

export default function OfferSlider() {
  const [index, setIndex] = useState(0);
  const maxIndex = cards.length - VISIBLE_CARDS;

  const next = () => {
    if (index < maxIndex) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="py-16 bg-black text-left border-b-2 border-stone-800" id="services">
      <h2 className="text-4xl font-montserrat text-gray-300 mb-10 px-6 border-b-2 border-stone-800 pb-10">Nasze Usługi</h2>

      <div className="flex items-center justify-center gap-8">

        <button
          onClick={prev}
          disabled={index === 0}
          className={`text-xl ${
          index === 0 ? "text-gray-300" : "text-white hover:text-neutral-500 px-4 rounded-full bg-gray-300"
          } transition`}
        >
          ←
        </button>

        <div className="md:w-[1000px] overflow-hidden ">
          <motion.div
            className="flex gap-6 pb-8 px-6"
            animate={{ x: -index * (CARD_WIDTH + 24) }} 
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            {cards.map((card, i) => (
              <div key={card.title + i} className="w-[320px] shrink-0">
                <OfferCard
                  title={card.title}
                  description={card.description}
                  imagePath={card.imagePath}
                  alternative={card.alt}
                />
              </div>
            ))}
          </motion.div>
        </div>

        <button
          onClick={next}
          disabled={index === maxIndex}
          className={`text-xl ${
            index === maxIndex ? "text-gray-300" : "text-white hover:text-neutral-500 px-4 rounded-full bg-gray-300"
          } transition`}
        >
          →
        </button>
      </div>
    </section>
  );
} 