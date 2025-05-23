import Image from "next/image";
import { InventoryHeroSection } from "../../constants";

function InventoryPageHeroSection() {
  return (
    <div
      id="inventory"
      className="mx-auto h-screen w-4/5 overflow-hidden"
    >
      <h1 className="sm:text-md md:text-md mt-20 text-center text-sm font-bold italic text-stone-600 lg:text-4xl">
        {InventoryHeroSection.title}
      </h1>

      {/* image sections */}
      <div className="grid my-3 h-2/3 w-full grid-cols-5 grid-rows-4 gap-2">
        <div className="row-span-2 h-full w-full">
          <Image
            alt="Inventory Images"
            src={InventoryHeroSection.imageOne}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="col-start-1 row-span-2 row-start-3">
          <Image
            alt="Inventory Images"
            src={InventoryHeroSection.imageTwo}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="col-span-3 col-start-2 row-span-4 row-start-1">
          <Image
            alt="Inventory Images"
            src={InventoryHeroSection.imageThree}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="col-start-5 row-span-2 row-start-1">
          <Image
            alt="Inventory Images"
            src={InventoryHeroSection.imageFour}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="col-start-5 row-span-2 row-start-3">
          <Image
            alt="Inventory Images"
            src={InventoryHeroSection.imageFive}
            quality={100}
            placeholder="blur"
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
      <div className="rok flex h-16 w-full items-center justify-center">
        <h1 className="text-center font-bold">
          {InventoryHeroSection.description}
        </h1>
      </div>
    </div>
  );
}

export default InventoryPageHeroSection;
