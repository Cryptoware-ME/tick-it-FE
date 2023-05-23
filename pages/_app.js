import "../styles/globals.css";
import "../styles/fonts.css";
import "../styles/colors.css";
import "@next/font/google";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "bootstrap/dist/css/bootstrap.css";
import "@cryptogate/react-ui/dist/esm/index.css";
import { MultiChainProvider } from "@cryptogate/react-providers";
import config from "../config";
import React from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "@next/font/google";
import { AuthModalProvider } from "../context/AuthModalProvider";
import { ProSidebarProvider } from "react-pro-sidebar";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "../auth/AuthProvider";
import { SessionProvider } from "next-auth/react";
import LoginModal from "../components/LoginModal";
const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps, session }) {
  return (
    <div className={inter.className}>
      <MultiChainProvider config={config}>
        <SessionProvider session={session}>
          <AuthProvider>
            <AuthModalProvider>
              <ProSidebarProvider>
                <NavBar />

                <Component {...pageProps} />
                <Footer />
              </ProSidebarProvider>
            </AuthModalProvider>
          </AuthProvider>
        </SessionProvider>
      </MultiChainProvider>
    </div>
  );
}

export default MyApp;
