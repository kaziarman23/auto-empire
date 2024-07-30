import AboutUsSection from "./Components/homePage/AboutUsSection";
import HeroSection from "./Components/homePage/HeroSection";
import LetestSection from "./Components/homePage/LetestSection";
import TopSellSection from "./Components/homePage/TopSellSection";

function Home() {
  return (
    <div>
      <HeroSection/>
      <LetestSection/>
      <TopSellSection />
      <AboutUsSection />
    </div>
  );
}

export default Home;
