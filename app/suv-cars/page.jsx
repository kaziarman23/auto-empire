import React from "react";
import SuvWelcomeComponent from "../Components/SuvPage/SuvWelcomeComponent";
import SuvAboutComponent from "../Components/SuvPage/SuvAboutComponent";
import SuvPopularComponent from "../Components/SuvPage/SuvPopularComponent";
import SuvCollactionComponent from "../Components/SuvPage/SuvCollactionComponent";
import SuvReviewComponent from "../Components/SuvPage/SuvReviewComponent";

function page() {
  return (
    <div>
      <SuvWelcomeComponent />
      <SuvAboutComponent />
      <SuvPopularComponent />
      <SuvCollactionComponent />
      <SuvReviewComponent />
    </div>
  );
}

export default page;
