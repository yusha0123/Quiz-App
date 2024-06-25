import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ModalProvider from "@/components/modals/modal-provider";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quizy - Test Your Knowledge!",
  description: "A Quiz App built using Next JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ModalProvider />
        <main>{children}</main>
        <Toaster position="top-center" duration={5000} richColors />
      </body>
    </html>
  );
}
