import { latestSection, latestSectionImages } from "@/app/constants";
import Image from "next/image";
import Link from "next/link";
// import { motion } from "framer-motion";

function LetestComponent() {
  return (
    <>
      <div>
        <div className="mx-auto my-10 flex h-screen w-4/5 flex-col items-center justify-center gap-5">
          <h1 className="text-md text-stone-600 font-bold md:text-xl xl:text-5xl">
            {latestSection.title}
          </h1>
          <span className="text-lg cursor-text text-left hover:text-orange-500">
            {latestSection.description}
          </span>
          <div className="my-5 flex flex-col items-center justify-center gap-3 xl:flex-row">
            {latestSectionImages.map((img, index) => {
              return (
                <div className="h-80 w-80 object-cover" key={index}>
                  <Link
                    href={
                      index === 0
                        ? "/luxury-cars"
                        : index === 1
                          ? "/race-cars"
                          : "/suv-cars"
                    }
                  >
                    <Image
                      src={img.image}
                      alt="Latest Cars"
                      quality={100}
                      placeholder="blur"
                      className='object-cover rounded-xl'
                      title="Click it if you'r Interestate"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default LetestComponent;
