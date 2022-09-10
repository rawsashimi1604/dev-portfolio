import "../styles/globals.css";
import "animate.css";
import Navbar from "@/components/layouts/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="text-black bg-white w-screen">
        <div className="container mx-auto px-1 lg:px-3 max-w-[1200px]">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
