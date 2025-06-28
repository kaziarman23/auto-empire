import Image from "next/image";
import { TreasureSection } from "../../constants";

function TreasureComponent() {
  return (
    <div
      id="inventory"
      className="mx-auto h-screen w-4/5 overflow-hidden"
    >
      <h1 className="sm:text-md md:text-md mt-20 text-center text-sm font-bold italic text-stone-600 lg:text-4xl">
        {TreasureSection.title}
      </h1>

      {/* image sections */}
      <div className="my-3 grid h-2/3 w-full grid-cols-5 grid-rows-4 gap-2">
        <div className="row-span-2 h-full w-full">
          <Image
            alt="Inventory Images"
            src={TreasureSection.imageOne}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="col-start-1 row-span-2 row-start-3">
          <Image
            alt="Inventory Images"
            src={TreasureSection.imageTwo}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="col-span-3 col-start-2 row-span-4 row-start-1">
          <Image
            alt="Inventory Images"
            src={TreasureSection.imageThree}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="col-start-5 row-span-2 row-start-1">
          <Image
            alt="Inventory Images"
            src={TreasureSection.imageFour}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="col-start-5 row-span-2 row-start-3">
          <Image
            alt="Inventory Images"
            src={TreasureSection.imageFive}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
      <div className="rok flex h-16 w-full items-center justify-center">
        <h1 className="text-center font-bold">{TreasureSection.description}</h1>
      </div>
    </div>
  );
}

export default TreasureComponent;
