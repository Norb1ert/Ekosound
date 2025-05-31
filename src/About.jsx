
function About() {
  return (
    <div className="py-20 bg-orange-500 text-center">
      <section
        id="about"
        className="  grid bg-orange-500 grid-cols-1 justify-center items-center gap-24  px-20"
      >
        <div className="pb-10 mb-10 flex gap-8 flex-col md:flex-row">

        <div className=" flex flex-col justify-cente order-1 sm:order-1">
          <div className="flex flex-col items-start max-w-[1000px]">
          <h2 className="max-w-xl text-white text-3xl font-medium pb-10 self-start text-left md:text-4xl lg:text-6xl whitespace-normal break-words">
              Przynosimy
              <br></br>
              <span className="text-orange-300 underline uppercase bg-gradient-to-r from-yellow-300 to-lime-400 bg-clip-text text-transparent whitespace-normal break-all">
                ekologiczne
              </span>
              <br></br>
              rozwiązania aby tobie żyło się lepiej
            </h2>
            <p className="text-orange-100 text-start text-sm md:text-md lg:text-lg tracking-normala pb-4">
            Oferujemy kompleksowe rozwiązania w zakresie pomiarów i analiz środowiskowych. 
            Pomagamy klientom poprawić jakość powietrza, zwiększyć efektywność energetyczną 
            i wprowadzić realne zmiany na rzecz zrównoważonego rozwoju. 
            Nasz zespół łączy nowoczesne technologie z doświadczeniem, aby dostarczać precyzyjne i wiarygodne wyniki.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[500px] justify-self-center self-center  order-2 sm:order-2">
          <img
            src="microphone.jpg"
            className="w-full h-auto object-contain"
            alt="About"
            />
        </div>
      </div>

        {/* Section 2 */}

        <div className="pb-10 mb-10 flex gap-8 flex-col md:flex-row">

        <div className="w-full max-w-[500px] justify-self-center self-center  order-1 sm:order-1">
            <img
              src="jaworzno.jpg"
              className="w-full h-auto object-contain"
              alt="About"
            />
          </div>

          <div className=" flex flex-col justify-cente order-1 sm:order-1">
            <div className="flex flex-col items-start max-w-[1000px]">
            <h2 className="max-w-xl text-white text-3xl font-medium pb-10 self-start text-left md:text-4xl lg:text-6xl whitespace-normal break-words">
            Wspieramy
                <br></br>
                <span className="text-orange-300 underline uppercase bg-gradient-to-r from-yellow-300 to-lime-400 bg-clip-text text-transparent whitespace-normal break-all">
                nowoczesne
                </span>
                <br></br>
                technologie i zrównoważony rozwój
              </h2>
             <p className="text-orange-100 text-start text-sm md:text-md lg:text-lg tracking-normala pb-4">
              Współpracujemy z uczelniami, instytucjami publicznymi i firmami, oferując precyzyjne 
              pomiary i ekspertyzy techniczne. Naszym celem jest wspieranie projektów, które przyczyniają 
              się do realnych zmian w kierunku ekologicznej przyszłości.
              </p>
            </div>
          </div>

          
        </div>
      </section>
    </div>
  );
}

export default About;
