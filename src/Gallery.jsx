export default function FaqSection() {
  return (
    <section className="bg-black px-8 py-20">
      <h2 className="text-5xl md:text-6xl font-montserrat pb-16 text-white">
        Najczęściej Zadawane Pytania
      </h2>

      <div className="grid grid-cols-1 xplus:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="flex flex-col justify-start bg-neutral-900 rounded-2xl p-6 gap-4">
          <img
            src="/offer.jpg"
            alt="Czas realizacji"
            className="rounded-xl w-full filter grayscale"
          />
          <h3 className="text-white text-[2rem] font-bold md:text-[3rem] xplus:text-[2rem]">
            Jak długo trwa realizacja usługi?
          </h3>
          <p className="text-white text-sm text-left sm:text-lg">
            Czas realizacji zależy od rodzaju zlecenia i jego złożoności. Standardowo proces trwa od 3 do 10 dni roboczych, ale w przypadku bardziej rozbudowanych projektów może się wydłużyć.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-start bg-neutral-900 rounded-2xl p-6 gap-8">
          <h3 className="text-white text-[2rem] font-bold md:text-[3rem] xplus:text-[2rem]">
            Czy mogę wprowadzić zmiany po złożeniu zamówienia?
          </h3>
          <p className="text-white text-sm text-left sm:text-lg">
            Tak, możliwe jest wprowadzenie zmian, o ile projekt nie został jeszcze zakończony. W przypadku istotnych modyfikacji może to jednak wpłynąć na czas realizacji i koszt.
          </p>
          <img
            src="/offer.jpg"
            alt="Zmiany w projekcie"
            className="rounded-xl w-full filter grayscale"
          />
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-start bg-neutral-900 rounded-2xl p-6 gap-8 xplus:row-span-2">
          <img
            src="/offer.jpg"
            alt="Płatności"
            className="rounded-xl object-cover xplus:min-h-[550px] filter grayscale"
          />
          <h3 className="text-white text-[2rem] font-bold md:text-[3rem] xplus:text-[2rem]">
            Jakie formy płatności są akceptowane?
          </h3>
          <p className="text-white text-sm text-left sm:text-lg">
            Akceptujemy płatności przelewem bankowym, kartą płatniczą oraz systemami online (np. Przelewy24, PayPal). Szczegóły podawane są podczas składania zamówienia.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col xplus:flex-row bg-neutral-900 rounded-2xl p-6 gap-8 xplus:col-span-2 xplus:col-start-1 xplus:max-h-[270px]">
          <img
            src="/offer.jpg"
            alt="Gwarancja"
            className="rounded-xl xplus:max-w-[380px] w-full object-cover filter grayscale"
          />
          <div className="flex flex-col">
            <h3 className="text-white text-[2rem] font-bold text-left md:text-[3rem] xplus:text-[2rem]">
              Czy oferujecie gwarancję na wykonane usługi?
            </h3>
            <p className="text-white text-sm text-left col-span-2 sm:text-lg xplus:text-sm xl:text-lg">
              Tak, na wszystkie usługi udzielamy gwarancji jakości. W przypadku jakichkolwiek nieprawidłowości, poprawki wykonujemy bez dodatkowych opłat zgodnie z ustaleniami zawartymi w umowie.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
