import { Button } from "@headlessui/react";

function HeroSection() {
  const handleClick = () => {
    window.location.href = "#about";
  };
  return (
    <section
      id="home"
      className="bg- text-orange-500  py-20  h-screen flex w-full items-start justify-center flex-col  bg-[url('/bg-waves.jpg')] bg-cover"
    >
      <h2 className="text-5xl sm:text-8xl font-bold mb-4 px-7 uppercase  break-words text-center sm:text-left">
        Ekosound Akustyka
      </h2>

      <p className="text-2xl italic px-7 text-center sm:text-left text-slate-700/70 font-semibold lg:text-4xl self-center sm:self-start">
        Wiemy co w trawie pisczczy
      </p>
      <Button
        onClick={handleClick}
        className="mt-8 mx-7 px-6 py-3 bg-gray-100 rounded-full text-orange-500 shadow-lg shadow-orange-500/70 border-2 border-solid border-orange-500 uppercase font-semibold text-xl lg:text:text-4xl transform transition duration-200 hover:scale-110 hover:-translate-y-1 hover:bg-orange-50 self-center sm:self-start"
        style={{ boxShadow: "10px 10px 20px rgba(249, 115, 22, 0.25)" }}
      >
        Dowiedz się więcej
      </Button>
    </section>
  );
}

export default HeroSection;
