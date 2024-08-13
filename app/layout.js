import styles from "@/styles/global.css"
import Nav from "@/components/navbar/navbar"
import Footer from "@/components/Footer/Footer";

import { Inter, Archivo_Narrow } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display:'swap',
})
const archivo = Archivo_Narrow({
  subsets: ["latin"],
  variable: "--font-archivo",
  display:'swap',
})

export const metadata = {
  title: "Veritas Analytica",
  description: "Veritas analytica",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${archivo.variable}`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
