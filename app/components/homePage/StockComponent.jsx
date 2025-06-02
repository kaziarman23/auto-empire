import { StockSection } from "../../constants";
import { StockCardSection } from "../../constants";

function StockComponent() {
  return (
    <div className="mx-auto h-screen w-4/5">
      <div className="flex h-1/2 w-full flex-col items-center justify-center gap-5">
        <h1 className="sm:text-md md:text-md text-center text-sm font-bold italic text-stone-600 lg:text-4xl">
          {StockSection.title}
        </h1>
        <p className='text-lg'>{StockSection.description}</p>
        <p className='text-lg'>{StockSection.descriptionTwo}</p>
      </div>
      <div className="flex h-1/2 w-full items-center justify-center gap-5">
        {StockCardSection.map((card, i) => (
          <div
            key={i}
            className="h-52 w-1/3 rounded-tr-[70px] rounded-2xl border-2 border-white p-5"
          >
            <h1 className="text-center font-bold text-lg">{card.cardTitle}</h1>
            <p className="text-left">{card.cardDescription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StockComponent;
