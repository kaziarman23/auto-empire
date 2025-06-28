import "./globals.css";
import { Poppins } from "next/font/google";
import ReduxProvider from "./providers/ReduxProvider";
import AuthStateProvider from "./providers/AuthStateProvider";
import MainLayoutWrapper from "./pageComponents/wrappers/MainLayoutWrapper";

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
        <ReduxProvider>
          <AuthStateProvider>
            <MainLayoutWrapper>{children}</MainLayoutWrapper>
          </AuthStateProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
