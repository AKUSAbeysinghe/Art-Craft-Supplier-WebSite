import React from "react";

import DrawerSection from "./../DrawerSection";
import FigmentationBrowser from "../FigmentBrowser";
import ProductCollection from "../ProductCards";
import Gallery from "../Gallery";
import NewsLatterFooter from "../NewslatterFooter";


import Hero from "../Hero";


const Home = () => {
  return (
    <>
      <Hero/>
      <DrawerSection/>
      <FigmentationBrowser/>
      <ProductCollection/>
      <Gallery/>
      <NewsLatterFooter/>
      
      
    </>
  );
};

export default Home;