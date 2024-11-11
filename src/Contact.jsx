export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-20 bg-orange-500 text-center grid md:grid-cols-5 gap-10 grid-flow-column grid-cols-1"
    >
      <div className="flex items-center justify-center my-auto flex-col col-span-3 ">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white">
          Skontaktuj się z nami
        </h2>
        <p className="max-w-2xl mx-auto mb-4 text-white text-xl md:text-2xl">
          Tu możesz opisać, jak najlepiej się z wami skontaktować.
        </p>
        <form className="max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Imię"
            className="w-full mb-4 p-2 rounded border text-xl md:text-2xl"
          />
          <input
            type="email"
            placeholder="E-mail"
            className="w-full mb-4 p-2 rounded border text-xl md:text-2xl"
          />
          <textarea
            placeholder="Wiadomość"
            className="w-full mb-4 p-2 rounded border text-xl md:text-2xl"
          ></textarea>
          <button
            type="submit"
            className="mt-6 mx-7 px-6 py-3 bg-gray-100 rounded-full text-orange-500 shadow-lg shadow-orange-500/70 border-2 border-solid border-orange-500 uppercase font-semibold text-xl md:text-2xl"
          >
            Wyślij
          </button>
        </form>
      </div>

      <div className="flex items-center justify-center col-span-2 flex-col">
        <img
          src="portrait.jpg"
          alt="owner portrait"
          className="object-cover h-full max-h-[500px] w-full"
        />
        <p className="self-end text-gray-200 italic">CEO dr. Rafał Żuchowski</p>
      </div>
    </section>
  );
}
