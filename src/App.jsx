import React from "react";
import Navbar from "./components/Navbar";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import MainHome from "./MainHome";
import Products from "./Product-section/products";
import MainRoute from "./routes/mainroute";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <main>
      <Navbar />
      <MainRoute />
    </main>
  );
};

export default App;
