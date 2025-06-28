import AboutPageFounderSection from "../pageComponents/aboutPage/AboutPageFounderSection";
import AboutPagePrestigeSection from "../pageComponents/aboutPage/AboutPagePrestigeSection";
import AboutPageSignatureSection from "../pageComponents/aboutPage/AboutPageSignatureSection";
import AboutPageStorySection from "../pageComponents/aboutPage/AboutPageStorySection";
import AboutPageTeamSection from '../pageComponents/aboutPage/AboutPageTeamSection';

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
