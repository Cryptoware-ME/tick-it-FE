import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "@/components/Navbar/navbar";
import '@next/font/google'
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

export const metadata = {
  title: "Tick It",
  description: "Ticketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <div
          // style={{
          //   paddingTop: "80px",
          // }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
