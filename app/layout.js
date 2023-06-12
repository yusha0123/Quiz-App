import "./globals.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import { ContextProvider } from "@/context/ContextProvider";

export const metadata = {
  title: "Quizy || Test Your Knowledge!",
  description: "A Quiz App built on Next JS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
