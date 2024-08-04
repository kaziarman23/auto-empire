import React from "react";
import RaceWelcomComponent from "../Components/RacePage/RaceWelcomComponent";
import RaceAboutComponent from "../Components/RacePage/RaceAboutComponent";
import RacePopularComponent from "../Components/RacePage/RacePopularComponent";
import RaceCollactionComponent from "../Components/RacePage/RaceCollactionComponent";
import RaceReviewComponent from "../Components/RacePage/RaceReviewComponent";

function page() {
  return (
    <div>
      <RaceWelcomComponent />
      <RaceAboutComponent />
      <RacePopularComponent />
      <RaceCollactionComponent />
      <RaceReviewComponent />
    </div>
  );
}

export default page;
