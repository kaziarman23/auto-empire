import LuxuryAboutComponent from "../Components/luxuryPage/LuxuryAboutComponent";
import LuxuryCollactionComponent from "../Components/luxuryPage/LuxuryCollactionComponent";
import LuxuryPopularComponent from "../Components/luxuryPage/LuxuryPopularComponent";
import LuxuryReviewComponent from "../Components/luxuryPage/LuxuryReviewComponent";
import LuxuryWelcomeComponent from "../Components/luxuryPage/LuxuryWelcomeComponent";

function page() {
  return (
    <div>
      <LuxuryWelcomeComponent />
      <LuxuryAboutComponent />
      <LuxuryPopularComponent />
      <LuxuryCollactionComponent />
      <LuxuryReviewComponent />
    </div>
  );
}

export default page;
