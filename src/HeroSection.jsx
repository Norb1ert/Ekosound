import { Button } from "@headlessui/react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function HeroSection() {
  const handleClick = () => {
    window.location.href = "#about";
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const firstLine = "EKOSOUND";
  const secondLine = "AKUSTYKA";

  const letterAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.08,
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    }),
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-10 text-white"
    >
     
      <video
        className="absolute top-0 left-0 w-full h-full z-[-1] object-cover brightness-50 contrast-125 grayscale"
        src="/road-bg.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      
      <div className="relative z-10 flex flex-col items-center text-center px-4">
      
        <motion.div className="text-5xl sm:text-[7rem] font-montserrat italic  uppercase tracking-wide leading-tight flex flex-wrap justify-center mb-2"
          initial="hidden"
          animate="visible"
        >
          {firstLine.split("").map((char, i) => (
            <motion.span
              key={`first-${i}`}
              custom={i}
              variants={letterAnimation}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

      
        <motion.div className="text-5xl sm:text-[7rem] font-montserrat italic uppercase tracking-wide leading-tight flex flex-wrap justify-center mb-6"
          initial="hidden"
          animate="visible"
        >
          {secondLine.split("").map((char, i) => (
            <motion.span
              key={`second-${i}`}
              custom={i}
              variants={letterAnimation}
              className="inline-block"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

     
        <motion.p
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg italic text-gray-300 lg:text-xl max-w-[400px] mb-6"
        >
          Wiemy co w trawie piszczy skupiamy się na nowoczesnych rozwiązaniach pomiarowych tak aby dostarczyć świetną jakość naszym klientom
        </motion.p>

    
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="flex justify-center"
        >
          <Button
            onClick={handleClick}
            className="bg-transparent text-orange-400 -skew-x-12 shadow-lg shadow-orange-200 border-2 border-orange-400 transform transition duration-700 hover:scale-110 hover:-translate-y-1 hover:bg-orange-500 hover:text-white"
            style={{ boxShadow: "10px 10px 20px rgba(249, 115, 22, 0.25)" }}
          >
            <span className="skew-x-12 px-6 py-3 block text-xl lg:text-2xl font-semibold">
              Dowiedz się więcej
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
