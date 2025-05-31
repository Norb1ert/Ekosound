import Header from "./components/Header";
import About from "./About";
import Footer from "./components/Footer";
import HeroSection from "./HeroSection";
import Offer from "./Offer";
import Contact from "./Contact";
import Parthners from "./components/Parthners";

function App() {
  return (
    <div>
      {/* Nagłówek */}
      <Header />

      {/* Sekcja główna */}
      <HeroSection />

      {/* O nas */}
      <About />

      {/* Showcase */}
      <Parthners/>

      {/* Usługi */}
      <Offer />

      {/* Kontakt */}
      <Contact />

      {/* Stopka */}
      <Footer />
    </div>
  );
}

export default App;
