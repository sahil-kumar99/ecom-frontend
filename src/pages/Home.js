import React, { useEffect } from "react";
import BannerSection from "../components/BannerSection";
import TrendingProduct from "../components/TrendingProduct";
import Layout from "../components/Layout";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const userData = useSelector((state) => state?.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userData?.loginStatus) {
      navigate("/login");
    }
  }, []);
  return (
    <Layout>
      <BannerSection />
      <TrendingProduct />
    </Layout>
  );
};

export default Home;
