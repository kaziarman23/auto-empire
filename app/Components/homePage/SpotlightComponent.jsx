import Image from "next/image";
import { SpotlightSection } from "../../constants";

function SpotlightComponent() {
  return (
    <div className="mx-auto h-[100vh] w-4/5">
      <h1 className="my-5 text-center text-4xl font-bold italic text-stone-600">
        {SpotlightSection.title}
      </h1>

      <div className="flex items-start justify-center gap-5">
        <div className="h-full w-4/6 space-y-10">
          <h1 className="text-4xl font-bold">{SpotlightSection.headline}</h1>
          <p className="hover:text-orange-500 cursor-text">
            {SpotlightSection.descriptionOne}
          </p>
          <p className="hover:text-orange-500 cursor-text">
            {SpotlightSection.descriptionTwo}
          </p>
        </div>

        {/* image section */}
        <div className="flex h-full w-2/6 flex-col items-center justify-center">
          <Image
            src={SpotlightSection.ImageOne}
            alt="poster image one"
            quality={100}
            placeholder="blur"
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default SpotlightComponent;
