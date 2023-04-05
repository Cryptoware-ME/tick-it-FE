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
import { Inter } from "@next/font/google";
import LoginModal from "../components/LoginModal";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }) {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className={inter.className}>
      <MultiChainProvider config={config}>
        {/* <AuthModalProvider> */}
          <NavBar setModalOpen={setModalOpen} />
          {modalOpen && <LoginModal />}

          <Component {...pageProps} />
          <Footer />
        {/* </AuthModalProvider> */}
      </MultiChainProvider>
    </div>
  );
}

export default MyApp;
