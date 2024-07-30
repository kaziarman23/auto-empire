import Link from "next/link";

function Navbar() {
  return (
    <nav className="w-full h-20 flex justify-center items-center">
      <div className="color w-1/2 h-10 rounded-xl bg-zinc-900 z-50 flex justify-evenly items-center">
        <Link href="/">
          <h3 className="p-3 text-white hover:text-orange-500">
            Home
          </h3>
        </Link>
        <Link href="/luxury-cars">
          <h3 className="p-3 text-white hover:text-orange-500">
            Luxury cars
          </h3>
        </Link>
        <Link href="/race-cars">
          <h3 className="p-3 text-white hover:text-orange-500">
            Racing cars
          </h3>
        </Link>
        <Link href="/suv-cars">
          <h3 className="p-3 text-white hover:text-orange-500">
            SUVs monsters
          </h3>
        </Link>
        <Link href="/contact-us">
          <h3 className="p-3 text-white hover:text-orange-500">
            Contact Us
          </h3>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
