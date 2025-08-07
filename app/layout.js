import "./globals.css";
import { Poppins } from "next/font/google";
import ReduxProvider from "./providers/ReduxProvider";
import AuthStateProvider from "./providers/AuthStateProvider";
import MainLayoutWrapper from "../components/wrappers/MainLayoutWrapper";
import { ThemeProvider } from "./providers/theme-provider";

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
        <ThemeProvider>
          <ReduxProvider>
            <AuthStateProvider>
              <MainLayoutWrapper>{children}</MainLayoutWrapper>
            </AuthStateProvider>
          </ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
