export default function Partners() {
    return (
      <div className="relative overflow-hidden bg-black pt-12 py-12">
        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-black to-transparent z-10" />
  
        <h2 className="md:text-5xl text-3xl text-gray-300 pt-8 pb-20  font-montserrat text-center">
          Współpracujemy z
        </h2>
  
        <div className="w-full overflow-hidden">
          <div className="flex w-max animate-scroll gap-16">
            {Array(4).fill([
              "./generalna.png",
              "./svantek.png",
              "./polsl.png",
            ]).flat().map((src, idx) => (
              <img
                key={idx}
                src={src}
                className="h-20 object-contain grayscale hover:grayscale-0 transition duration-300 ease-in-ou px-2 py-1 min-w-[240px] bg-gray-900 rounded-full"
                alt="partner logo"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  