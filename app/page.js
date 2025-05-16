import AboutUsSection from "./Components/homePage/AboutUsComponent";
import HeroComponent from "./Components/homePage/HeroComponent";
import LetestComponent from "./Components/homePage/LetestComponent";
import TopSellComponent from "../public/images/Other_Images/TopSellComponent";

function Home() {
  return (
    <div>
      <HeroComponent/>
      <LetestComponent/>
      <TopSellComponent />
      <AboutUsSection />
    </div>
  );
}

export default Home;
