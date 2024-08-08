import { footertext } from "../constants"

function Footer() {
  return (
    <>
    <hr />
    <div className="w-full h-[125px] mt-5 text-white flex justify-center items-center flex-col gap-2">
      <p className="text-sm text-center mx-10 hover:text-orange-500">{footertext}</p>
      <h2 className="text-sm text-center mb-4 hover:text-orange-500"> Drive safely and enjoy the road ahead.</h2>
    </div>
    </>
    )
}

export default Footer
