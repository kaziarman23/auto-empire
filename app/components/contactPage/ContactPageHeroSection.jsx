import Image from "next/image";
import { ContactHeroSection } from "../../constants";

function ContactPageHeroSection() {
  return (
    <div className="mx-auto h-screen w-4/5 overflow-hidden">
      <h1 className="mb-10 mt-20 text-center text-5xl font-bold italic text-stone-600">
        {ContactHeroSection.title}
      </h1>
      <div className="flex items-center justify-center">
        <div className="h-full w-1/2 space-y-5 p-5">
          <h1 className="text-2xl font-bold">Our Location</h1>
          <p className="cursor-text text-left hover:text-orange-500">
            {ContactHeroSection.discription}
          </p>
          <h4>{ContactHeroSection.subtitle}</h4>
          <p className="cursor-text hover:text-orange-500">
            {ContactHeroSection.openDay}
          </p>
          <p className="cursor-text hover:text-orange-500">
            {ContactHeroSection.Appointment}
          </p>
        </div>
        <div className="h-1/2 w-1/2">
          <Image
            alt="location image"
            src={ContactHeroSection.image}
            quality={100}
            placeholder='blur'
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPageHeroSection;
