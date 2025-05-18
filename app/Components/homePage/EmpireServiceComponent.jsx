import Image from "next/image";
import { EmpireServiceSection } from "../../constants";

function EmpireServiceComponent() {
  return (
    <div className="mx-auto h-[100vh] w-4/5 border border-white">
      <h1 className="my-5 text-center text-4xl font-bold italic text-stone-600">
        {EmpireServiceSection.title}
      </h1>

      {/* grid section */}
      <div className="grid h-[85%] grid-cols-5 grid-rows-2 gap-2 border border-blue-500">
        <div className="col-span-2 space-y-3 p-5">
          <h1 className="text-4xl">{EmpireServiceSection.heading}</h1>
          <p className="cursor-text text-base hover:text-orange-500">
            {EmpireServiceSection.descriptionOne}
          </p>
          
        </div>
        <div className="col-span-2 col-start-3 h-full w-full">
          <Image
            src={EmpireServiceSection.ImageOne}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-start-5">
          <Image
            src={EmpireServiceSection.ImageTwo}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="row-start-2 h-full w-full">
          <Image
            src={EmpireServiceSection.ImageThree}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="row-start-2 h-full w-full">
          <Image
            src={EmpireServiceSection.ImageFour}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="row-start-2 h-full w-full">
          <Image
            src={EmpireServiceSection.ImageFive}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-2 row-start-2 h-full w-full">
          <Image
            src={EmpireServiceSection.ImageSix}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default EmpireServiceComponent;

{
  /* <div className="grid grid-cols-5 grid-rows-6 gap-2 border border-white">
        <div className="col-span-3 row-span-3 space-y-3 border border-blue-500 p-5">
          <h1 className="text-4xl">{EmpireServiceSection.heading}</h1>
          <p className="text-base hover:bg-orange-500">
            {EmpireServiceSection.descriptionOne}
          </p>
          <p className="text-base hover:bg-orange-500">
            {EmpireServiceSection.descriptionTwo}
          </p>
        </div>
        <div className="col-span-2 row-span-3 col-start-4 h-full w-full">
          <Image
            src={EmpireServiceSection.ImageOne}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="col-span-2 row-span-3 col-start-4 row-start-4">
          <Image
            src={EmpireServiceSection.ImageTwo}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="row-span-3 col-start-1 row-start-4">
          <Image
            src={EmpireServiceSection.ImageThree}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="row-span-3 col-start-2 row-start-4">
          <Image
            src={EmpireServiceSection.ImageFour}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="row-span-3 col-start-3 row-start-4">
          <Image
            src={EmpireServiceSection.ImageFive}
            alt="service Image"
            quality={100}
            placeholder="blur"
            className="h-full w-full object-cover"
          />
        </div>
      </div> */
}
