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
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../auth/useAuth";
import { CartProvider } from "../cart/cart-provider";
import { GoogleOAuthProvider } from '@react-oauth/google';
const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps, session }) {
  return (
    <div className={inter.className}>
       <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <MultiChainProvider config={config}>
        <SessionProvider session={session}>
          <AuthProvider>
            <AuthModalProvider>
              <CartProvider>
                <ProSidebarProvider>
                  <NavBar />
                  <Component {...pageProps} />
                  <Footer />
                </ProSidebarProvider>
              </CartProvider>
            </AuthModalProvider>
          </AuthProvider>
        </SessionProvider>
      </MultiChainProvider>
      </GoogleOAuthProvider>
    </div>
  );
}

export default MyApp;
