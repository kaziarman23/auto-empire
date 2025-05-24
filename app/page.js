import EmpireServiceComponent from "./Components/homePage/EmpireServiceComponent";
import HeroComponent from "./Components/homePage/HeroComponent";
import LetestComponent from "./Components/homePage/LetestComponent";
import SpotlightComponent from "./Components/homePage/SpotlightComponent";
import StockComponent from './Components/homePage/StockComponent';
import TopSellComponent from "./Components/homePage/TopSellComponent";
import TreasureComponent from "./Components/homePage/TreasureComponent";

function Home() {
  return (
    <div>
      <HeroComponent />
      <LetestComponent />
      <TopSellComponent />
      <TreasureComponent />
      <SpotlightComponent />
      <EmpireServiceComponent />
      <StockComponent />
    </div>
  );
}

export default Home;
