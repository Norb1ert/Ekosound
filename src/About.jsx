import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function About() {
  return (
    <div className="py-20 bg-black text-center">
      <section
        id="about"
        className="grid grid-cols-1 justify-center items-center gap-24 px-6 md:px-20"
      >
        {/* First Section */}
        <motion.div
          className="pb-10 mb-10 flex gap-8 flex-col md:flex-row max-h-[480px]"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="flex flex-col justify-center order-1 sm:order-1">
            <div className="flex flex-col items-start max-w-[1000px]">
              <h2 className="max-w-xl text-white text-3xl font-medium pb-10 self-start text-left md:text-4xl lg:text-6xl whitespace-normal break-words">
                Przynosimy
                <br />
                <span className="text-orange-300 underline uppercase bg-gradient-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent whitespace-normal break-all">
                  ekologiczne
                </span>
                <br />
                rozwiązania aby tobie żyło się lepiej
              </h2>
              <p className="text-gray-300 text-left text-base md:text-lg tracking-normal pb-4">
                Oferujemy kompleksowe rozwiązania w zakresie pomiarów i analiz środowiskowych.
                Pomagamy klientom poprawić jakość powietrza, zwiększyć efektywność energetyczną
                i wprowadzić realne zmiany na rzecz zrównoważonego rozwoju.
                Nasz zespół łączy nowoczesne technologie z doświadczeniem, aby dostarczać precyzyjne i wiarygodne wyniki.
              </p>
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full max-w-[500px] justify-self-center self-center order-2 sm:order-2"
          >
            <img
              src="jaworzno.jpg"
              className="w-full object-contain rounded-xl shadow-lg filter grayscale"
              alt="About"
            />
          </motion.div>
        </motion.div>

        {/* Second Section */}
        <motion.div
          className="pb-10 mb-10 flex gap-8 flex-col md:flex-row"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-full max-w-[500px] justify-self-center self-center order-1 sm:order-1"
          >
            <img
              src="jaworzno.jpg"
              className="w-full object-contain rounded-xl shadow-lg filter grayscale"
              alt="About"
            />
          </motion.div>

          <div className="flex flex-col justify-center order-2 sm:order-2">
            <div className="flex flex-col items-start max-w-[1000px]">
              <h2 className="max-w-xl text-white text-3xl font-medium pb-10 self-start text-left md:text-4xl lg:text-6xl whitespace-normal break-words">
                Wspieramy
                <br />
                <span className="text-orange-300 underline uppercase bg-gradient-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent whitespace-normal break-all">
                  nowoczesne
                </span>
                <br />
                technologie i zrównoważony rozwój
              </h2>
              <p className="text-gray-300 text-left text-base md:text-lg tracking-normal pb-4">
                Współpracujemy z uczelniami, instytucjami publicznymi i firmami, oferując precyzyjne
                pomiary i ekspertyzy techniczne. Naszym celem jest wspieranie projektów, które przyczyniają
                się do realnych zmian w kierunku ekologicznej przyszłości.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
