import AboutPageFounderSection from "../Components/aboutPage/AboutPageFounderSection";
import AboutPagePrestigeSection from "../Components/aboutPage/AboutPagePrestigeSection";
import AboutPageSignatureSection from "../Components/aboutPage/AboutPageSignatureSection";
import AboutPageStorySection from "../Components/aboutPage/AboutPageStorySection";
import AboutPageTeamSection from '../Components/aboutPage/AboutPageTeamSection';

function page() {
  return (
    <div>
      <AboutPagePrestigeSection />
      <AboutPageSignatureSection />
      <AboutPageStorySection />
      <AboutPageFounderSection />
      <AboutPageTeamSection />
    </div>
  );
}

export default page;
