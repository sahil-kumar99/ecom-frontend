import React from "react";
import { NavBar } from "./Navbar";
import BannerSection from "./BannerSection";
import TrendingProduct from "./TrendingProduct";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <NavBar />
      <BannerSection />
      <TrendingProduct />
      <Footer />
    </>
  );
};

export default Home;
