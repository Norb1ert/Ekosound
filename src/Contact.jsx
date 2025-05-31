export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-6 bg-orange-500 text-center grid gap-10 grid-flow-column grid-cols-1"
    >
      <div className="flex items-center justify-center my-auto flex-col col-span-3 ">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          Skontaktuj się z nami
        </h2>
        <p className="max-w-2xl mx-auto mb-4 text-white text-xl md:text-2xl">
        </p>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Imię"
            className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
          <textarea
            placeholder="Wiadomość"
            className="w-full mb-4 px-4 py-3 rounded-lg border border-gray-300 text-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          ></textarea>
          <button
            type="submit"
            className="mt-6 mx-7 px-6 py-3 rounded-full text-orange-500 bg-white hover:bg-orange-500 hover:text-white border-2 border-orange-500 transition-colors duration-200 uppercase font-semibold text-xl md:text-2xl"
          >
            Wyślij
          </button>
        </form>
      </div>
    </section>
  );
}
