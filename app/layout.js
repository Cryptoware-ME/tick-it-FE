"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/footer";
import "@next/font/google";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
// import "@cryptogate/react-ui/dist/esm/index.css";
// import { MultiChainProvider } from "@cryptogate/react-providers";
// import config from "@/config";
import { Inter } from "@next/font/google";

export const metadata = {
  title: "Tick It",
  description: "Ticketing",
};

const inter = Inter({
  subsets: ["latin"],
});
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <MultiChainProvider config={config}> */}
      <body className={inter.className}>
        <NavBar />
        <div>{children}</div>
        <Footer />
      </body>
      {/* </MultiChainProvider> */}
    </html>
  );
}
