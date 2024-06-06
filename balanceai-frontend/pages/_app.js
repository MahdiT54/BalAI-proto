import Navbar from "@/components/Navbar";
import "@/styles/globals.css";  // globals.css global stylesheet

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}