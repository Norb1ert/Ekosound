import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
function OfferCard({ imagePath, alternative, title, description }) {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative group overflow-hidden rounded-xl shadow-md max-w-sm h-[360px] cursor-pointer"
    >
     
      <img
        src={imagePath}
        alt={alternative}
        className="w-full h-full object-cover filter grayscale "
      />

      <div className="absolute bottom-0 left-0 w-full bg-neutral-400/50 backdrop-blur text-white px-4 py-6 translate-y-[82px] group-hover:translate-y-0 transition-all duration-500 ease-out">
        <h3 className="text-xl font-semibold text-white mb-1 py-2 px-4 border border-white rounded-full max-w-[260px]">{title}</h3>
        <p className=" px-4 text-sm text-gray-200">{description}</p>
      </div>
    </motion.div>
  );
}

export default OfferCard;
