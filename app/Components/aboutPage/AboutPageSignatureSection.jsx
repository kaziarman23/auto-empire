import Image from "next/image";
import { AboutSignatureSection } from '../../constants';

function AboutPageSignatureSection() {
  return (
      <div className="mx-auto flex h-screen w-4/5 flex-col items-center justify-center gap-5">
        <h1 className="sm:text-md md:text-md text-sm font-bold text-stone-600 italic lg:text-4xl mt-5">
          {AboutSignatureSection.title}
        </h1>
        <p className="mx-10 text-sm hover:text-orange-500 md:mx-20 xl:text-lg">
          {AboutSignatureSection.discription}
        </p>

        <div className="flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-evenly">
          <div className="mx-5 w-4/5 lg:w-[300px] xl:w-[600px]">
            <h2 className="text-2xl mb-3 text-center font-bold text-stone-600 italic">
              {AboutSignatureSection.question}
            </h2>
            <div className="flex flex-col items-center justify-center gap-4">
              <div>
                <h3 className="font-bold hover:text-blue-500">
                  {AboutSignatureSection.answerOne}
                </h3>
                <p className="hover:text-orange-500">{AboutSignatureSection.answerDis}</p>
              </div>
              <div>
                <h3 className="font-bold hover:text-blue-500">
                  {AboutSignatureSection.answerTwo}
                </h3>
                <p className="hover:text-orange-500">
                  {AboutSignatureSection.answerDisTwo}
                </p>
              </div>
              <div className="font-bold">
                <h3 className="font-bold hover:text-blue-500">
                  {AboutSignatureSection.answerThree}
                </h3>
                <p className="hover:text-orange-500">
                  {AboutSignatureSection.answerDisThree}
                </p>
              </div>
              <div className="font-bold">
                <h3 className="font-bold hover:text-blue-500">
                  {AboutSignatureSection.answerFour}
                </h3>
                <p className="hover:text-orange-500">
                  {AboutSignatureSection.answerDisFour}
                </p>
              </div>
            </div>
          </div>

          <div className="h-60 w-60 lg:w-[300px]">
            <Image
              src={AboutSignatureSection.image}
              alt="welcome car image"
              className="rounded-xl"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
  );
}

export default AboutPageSignatureSection;
