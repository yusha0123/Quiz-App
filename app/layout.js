import "./globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { ContextProvider } from "@/context/ContextProvider";
import { Open_Sans } from "next/font/google";

export const metadata = {
  title: "Quizy || Test Your Knowledge!",
  description: "A Quiz App built on Next JS",
};

const open_sans = Open_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
