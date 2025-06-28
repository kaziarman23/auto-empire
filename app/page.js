import EmpireServiceComponent from "./pageComponents/homePage/EmpireServiceComponent";
import HeroComponent from "./pageComponents/homePage/HeroComponent";
import LetestComponent from "./pageComponents/homePage/LetestComponent";
import SpotlightComponent from "./pageComponents/homePage/SpotlightComponent";
import StockComponent from "./pageComponents/homePage/StockComponent";
import TopSellComponent from "./pageComponents/homePage/TopSellComponent";
import TreasureComponent from "./pageComponents/homePage/TreasureComponent";

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
