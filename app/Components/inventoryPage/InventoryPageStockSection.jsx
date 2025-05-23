import Image from "next/image";
import { InventoryStockSection } from "../../constants";

function InventoryPageStockSection() {
  return (
    <div className="mx-auto h-screen w-4/5">
      <div className="flex h-1/2 w-full flex-col items-center justify-center gap-5">
        <h1 className="sm:text-md md:text-md text-center text-sm font-bold italic text-stone-600 lg:text-4xl">
          {InventoryStockSection.title}
        </h1>
        <p>{InventoryStockSection.description}</p>
        <p>{InventoryStockSection.descriptionTwo}</p>
      </div>
      <div className="flex h-1/2 w-full items-center justify-center">
        <Image
          src={InventoryStockSection.imageOne}
          alt="Inventory Stock Image"
          quality={100}
          placeholder="blur"
          className="h-full w-full rounded-xl object-cover"
        />
      </div>
    </div>
  );
}

export default InventoryPageStockSection;
