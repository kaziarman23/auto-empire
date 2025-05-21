import AboutPageFounderSection from "../Components/aboutPage/AboutPageFounderSection";
import AboutPageHeroSection from "../Components/aboutPage/AboutPageHeroSection";
import AboutPageSignatureSection from "../Components/aboutPage/AboutPageSignatureSection";
import AboutPageStorySection from "../Components/aboutPage/AboutPageStorySection";

function page() {
  return (
    <div>
      <AboutPageHeroSection />
      <AboutPageSignatureSection />
      <AboutPageStorySection />
      <AboutPageFounderSection />
    </div>
  );
}

export default page;
