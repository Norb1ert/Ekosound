
import About from "./About";
import Footer from "./components/Footer";
import HeroSection from "./HeroSection";
import OfferSlider from "./Offer";
import Parthners from "./components/Parthners";
import Gallery from './Gallery'
import Header from './components/Header'

function App() {
  return (
    <div>
      
        <Header />
        

      {/* Sekcja główna */}
      <HeroSection />

      {/* O nas */}
      <About />

      {/* Showcase */}
      <Parthners/>

      {/* Usługi */}
      <OfferSlider />

      <Gallery />

      {/* Stopka */}
      <Footer />
    </div>
  );
}

export default App;
