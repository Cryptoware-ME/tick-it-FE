import "../styles/globals.css";
import "@next/font/google";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "bootstrap/dist/css/bootstrap.css";
import "@cryptogate/react-ui/dist/esm/index.css";
import { MultiChainProvider } from "@cryptogate/react-providers";
import config from "../config";
import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  let [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <MultiChainProvider config={config}>
        <NavBar setIsOpen={setIsOpen}/>
        <Component {...pageProps} />
        <Footer />
      </MultiChainProvider>
    </>
  );
}

export default MyApp;
