import Image from "next/image";
import { AboutFounderSection } from "../../constants";

function AboutPageFounderSection() {
  return (
    <div id='founder' className="mx-auto flex h-screen w-4/5 flex-col items-center justify-center">
      <h1 className="text-center text-4xl font-bold italic text-stone-600">
        {AboutFounderSection.title}
      </h1>
      <div className="mx-auto flex w-full items-center justify-center space-y-3">
        <div className="w-1/2 h-full flex justify-center items-center">
            <Image
              src={AboutFounderSection.Image}
              quality={100}
              alt="Founder page Image"
              className="w-4/5 h-4/5 rounded-xl bg-white"
            />
        </div>
        <div className="w-1/2 space-y-3 p-5">
          <p className="text-left hover:text-orange-600">
            <q> {AboutFounderSection.description}</q>
          </p>
          <h1 className="font-bold">{AboutFounderSection.author}</h1>
        </div>
      </div>
    </div>
  );
}

export default AboutPageFounderSection;
