import "../styles/globals.css";
import dynamic from "next/dynamic";
import Navbar from "@/components/layouts/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="container mx-auto px-1">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
