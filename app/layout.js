import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "@/components/Navbar/navbar";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import Footer from "@/components/Footer/footer";

export const metadata = {
  title: "Tick It",
  description: "Ticketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}
