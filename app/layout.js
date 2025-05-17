import "./globals.css";
import { Outfit } from "next/font/google";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Auto Empire",
  description: "This is about Auto Empire",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
