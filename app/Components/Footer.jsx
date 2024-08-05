import { footertext } from "../constants"

function Footer() {
  return (
    <>
    <hr />
    <div className="w-full h-20 mt-5 text-white flex justify-center items-center flex-col gap-2">
      <p className="hover:text-orange-500">{footertext}</p>
      <h2 className="hover:text-orange-500"> Drive safely and enjoy the road ahead.</h2>
    </div>
    </>
    )
}

export default Footer
