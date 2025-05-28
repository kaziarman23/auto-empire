import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";

const poppins = Poppins({
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
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
