import Image from "next/image";
import { AboutTeamSection } from "../../constants";

function AboutPageTeamSection() {
  return (
    <div id='team' className="mx-auto h-screen w-4/5">
      <h1 className="text-center text-5xl font-bold italic text-stone-600">
        {AboutTeamSection.title}
      </h1>
      <div className="my-5 flex h-4/5 w-full items-center justify-center gap-5">
        <div className="flex h-full w-1/3 flex-col items-center justify-center gap-3">
          <Image
            alt="Team section Image"
            src={AboutTeamSection.imageOne}
            quality={100}
            className="h-2/3 w-4/5 rounded-xl border border-white object-cover"
          />
          <h1 className="text-2xl font-bold hover:text-orange-600">
            {AboutTeamSection.nameOne}
          </h1>
          <h2 className="font-bold hover:text-orange-600">
            {AboutTeamSection.postOne}
          </h2>
          <p className="hover:text-orange-600">{AboutTeamSection.roleOne}</p>
        </div>
        <div className="flex h-full w-1/3 flex-col items-center justify-center gap-3">
          <Image
            alt="Team section Image"
            src={AboutTeamSection.imageTwo}
            quality={100}
            className="h-2/3 w-4/5 rounded-xl border border-white object-cover"
          />
          <h1 className="text-2xl font-bold hover:text-orange-600">
            {AboutTeamSection.nameTwo}
          </h1>
          <h2 className="font-bold hover:text-orange-600">
            {AboutTeamSection.postTwo}
          </h2>
          <p className="hover:text-orange-600">{AboutTeamSection.roleTwo}</p>
        </div>
        <div className="flex h-full w-1/3 flex-col items-center justify-center gap-3">
          <Image
            alt="Team section Image"
            src={AboutTeamSection.imageThree}
            quality={100}
            className="h-2/3 w-4/5 rounded-xl border border-white object-cover"
          />
          <h1 className="text-2xl font-bold hover:text-orange-600">
            {AboutTeamSection.nameThree}
          </h1>
          <h2 className="font-bold hover:text-orange-600">
            {AboutTeamSection.postThree}
          </h2>
          <p className="hover:text-orange-600">{AboutTeamSection.roleThree}</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPageTeamSection;
