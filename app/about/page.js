import AboutPageFounderSection from "../Components/aboutPage/AboutPageFounderSection";
import AboutPageHeroSection from "../Components/aboutPage/AboutPageHeroSection";
import AboutPageSignatureSection from "../Components/aboutPage/AboutPageSignatureSection";
import AboutPageStorySection from "../Components/aboutPage/AboutPageStorySection";
import AboutPageTeamSection from '../Components/aboutPage/AboutPageTeamSection';

function page() {
  return (
    <div>
      <AboutPageHeroSection />
      <AboutPageSignatureSection />
      <AboutPageStorySection />
      <AboutPageFounderSection />
      <AboutPageTeamSection />
    </div>
  );
}

export default page;
