import { useEffect } from "react";
import Lenis from "lenis";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import Home from "./pages/Home";
import bottomCircle from "./assets/images/download-Photoroom.png";
import bottomVid from "./assets/videos/Animation - 1748680590360.webm";
import { motion } from "framer-motion";

function App() {
  useEffect(() => {
    if (window.Shery) {
      window.Shery.makeMagnet(".magnet");
    }
  }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smooth: true,
      smoothTouch: true,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <Header />
      <Home />
      <Footer />
      <div className="xl:hidden fixed inset-0 bg-black z-[20] flex items-center justify-center">
        <h1 className="text-2xl text-white font-bold text-center px-4">
          Open on Desktop or Laptop for best experience
        </h1>
      </div>
      <div className="fixed bottom-0 right-0 w-48 h-48  z-30">
        <motion.img
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          src={bottomCircle}
          className="w-full h-full"
          alt=""
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="absolute magnet top-[20%] left-[18%] w-28 h-28  rounded-full "
        >
          <video
            className="w-full h-full"
            src={bottomVid}
            autoPlay
            muted
            loop
          ></video>
        </motion.div>
      </div>
    </>
  );
}

export default App;
