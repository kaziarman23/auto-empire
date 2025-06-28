import Image from "next/image";
import { InventorySection } from "../../constants";

function InventoryPage() {
  return (
    <div className="mx-auto h-full w-4/5 overflow-hidden">
      <h1 className="mb-10 mt-20 text-center text-5xl font-bold italic text-stone-600">
        Our Inventory
      </h1>
      <div className="grid h-full w-full grid-cols-3 gap-5">
        {InventorySection.map((card, i) => (
          <div
            key={i}
            className="card bg-base-100 h-[28rem] w-full overflow-hidden rounded-xl border-2 border-white shadow-sm"
          >
            <figure className="h-1/2 w-full">
              <Image
                src={card.image}
                alt={card.carName}
                quality={100}
                width={400}
                height={240}
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="card-body h-1/2 w-full space-y-3 p-5 text-white">
              <h2 className="card-title text-xl font-bold hover:text-blue-500">
                <span className="font-bold text-white">Model: </span>
                {card.carName}
              </h2>
              <p className="hover:text-blue-500">
                <span className="font-bold text-white">Brand: </span>
                {card.brand}
              </p>
              <p className="hover:text-blue-500">
                <span className="font-bold text-white">Price: </span>
                {card.price} BDT
              </p>
              <div className="card-actions cursor-pointer justify-end">
                <button className="btn w-full rounded-xl border border-white bg-black p-2 text-white delay-100 hover:bg-white hover:font-bold hover:text-black">
                  Get it Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InventoryPage;
