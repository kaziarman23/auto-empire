import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Auto Impire",
  description: "This is about Auto Impire",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
        {children}
      <Footer />
        </body>
    </html>
  );
}
