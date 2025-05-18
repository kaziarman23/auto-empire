import EmpireServiceComponent from './Components/homePage/EmpireServiceComponent';
import HeroComponent from "./Components/homePage/HeroComponent";
import LetestComponent from "./Components/homePage/LetestComponent";
import SpotlightComponent from './Components/homePage/SpotlightComponent';
import TopSellComponent from "./Components/homePage/TopSellComponent";

function Home() {
  return (
    <div>
      <HeroComponent />
      <LetestComponent />
      <TopSellComponent />
      <SpotlightComponent />
      <EmpireServiceComponent />
    </div>
  );
}

export default Home;
