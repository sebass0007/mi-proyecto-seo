
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
