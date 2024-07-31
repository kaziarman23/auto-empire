import AboutLuxuryCarSection from "../Components/luxuryPage/AboutLuxuryCarSection";
import PopularLuxuryCarSection from "../Components/luxuryPage/PopularLuxuryCarSection";
import WelcomeSection from "../Components/luxuryPage/WelcomeSection";

function page() {
  return (
    <div>
      <WelcomeSection />
      <AboutLuxuryCarSection />
      <PopularLuxuryCarSection />
    </div>
  );
}

export default page;
