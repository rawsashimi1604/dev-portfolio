import "../styles/globals.css";
import "animate.css";
import Navbar from "@/components/layouts/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="text-black bg-white">
        <div className="container mx-auto px-1 lg:px-3">
          <Navbar /> 
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
