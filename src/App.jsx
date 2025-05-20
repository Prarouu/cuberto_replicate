import Lenis from "lenis";
import "locomotive-scroll/dist/locomotive-scroll.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
import { useEffect } from "react";

function App() {
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
      <Footer />
    </>
  );
}

export default App;
