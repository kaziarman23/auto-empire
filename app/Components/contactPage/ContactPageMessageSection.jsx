import { ContactMessageSection } from "../../constants";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import {
  FaXTwitter,
} from "react-icons/fa6";
import { SiInstagram } from "react-icons/si";

function ContactPageMessageSection() {
  return (
    <div className="mx-auto h-screen w-4/5">
      <h1 className="text-center text-4xl font-bold italic text-stone-600 mb-5">
        {ContactMessageSection.title}
      </h1>
      <div className="flex items-start justify-center gap-2">
        <div className="w-1/2 space-y-3">
          <h1 className="text-5xl font-bold">
            {ContactMessageSection.subtitle}
          </h1>
          <p className="cursor-text hover:text-orange-600">
            {ContactMessageSection.description}
          </p>
          {/* Social Section */}
          <div className="flex items-start justify-between">
            <div className="w-1/2 space-y-3">
              <h1 className="text-2xl font-bold">Social Network</h1>
              <div className="flex items-center justify-start gap-2">
                <FaFacebook
                  className="cursor-pointer hover:text-blue-600"
                  size={20}
                />
                <FaLinkedin
                  className="cursor-pointer hover:text-blue-600"
                  size={20}
                />
                <FaXTwitter
                  className="cursor-pointer hover:text-blue-600"
                  size={20}
                />
                <SiInstagram
                  className="cursor-pointer hover:text-blue-600"
                  size={20}
                />
              </div>
            </div>
            <div className="w-1/2 space-y-3">
              <h1 className="text-2xl font-bold">Hot-Line</h1>
              <p className="cursor-pointer hover:text-blue-600">
                +880 1512345678
              </p>
              <p className="cursor-pointer hover:text-blue-600">
                +880 1612345678
              </p>
            </div>
          </div>
        </div>
        {/* Form Section */}
        <div className="w-1/2 space-y-5 rounded-xl border border-white p-5">
          <input
            type="text"
            className="w-full border-b-2 bg-transparent text-2xl outline-none"
            placeholder="Name"
          />
          <input
            type="email"
            className="w-full border-b-2 bg-transparent text-2xl outline-none"
            placeholder="Email"
          />
          <textarea
            name="message"
            id="message"
            rows="4"
            placeholder='Message'
            className="w-full text-2xl bg-black text-white border-b-2 outline-none"
            maxLength={70}
          />
          <button
            type="submit"
            className="w-full rounded-xl border bg-transparent px-6 py-3 font-bold uppercase hover:bg-white hover:text-black"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactPageMessageSection;
