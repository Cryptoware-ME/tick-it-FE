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
import React, { useState, useEffect } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Inter } from "@next/font/google";
import LoginModal from "../components/LoginModal";
import { AuthModalProvider } from "../context/AuthModalProvider";
import { ProSidebarProvider } from "react-pro-sidebar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validate } from "../axios/auth.axios";
import AuthContext from "../auth/AuthContext";
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps, session }) {
  const [user, setUser] = useState();

  const restoreUser = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      const response = await validate(token);

      if (response) {
        setUser(response);
      }
    }
  };

  useEffect(() => {
    restoreUser();
  }, []);

  return (
    <div className={inter.className}>
      <MultiChainProvider config={config}>
        <SessionProvider session={session}>
          <AuthContext.Provider value={{ user, setUser }}>
            <AuthModalProvider>
              <ProSidebarProvider>
                <NavBar />
                <LoginModal />
                <Component {...pageProps} />
                <Footer />
              </ProSidebarProvider>
            </AuthModalProvider>
          </AuthContext.Provider>
        </SessionProvider>
        <ToastContainer
        position="bottom-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        limit={3}
        pauseOnHover
        autoClose={2000}
      />
      </MultiChainProvider>
    </div>
  );
}

export default MyApp;
