import React, { useEffect } from "react";
import Card from "./Card";
import { useDispatch } from "react-redux";
import { GETPRODUCT } from "../store/actions/product";

const TrendingProduct = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GETPRODUCT());
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="font-bold text-xl mb-2 text-center ">
        <span className="border-b-8 border-sky-400 border-r-2 border-l-2 border-t-2 p-1">
          Trending Products
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
        <div className="w-full hover:shadow-md hover:shadow-sky-400 hover:bg-white transition duration-300 ease-in-out">
          <Card />
        </div>
        <div className="w-full hover:shadow-md hover:shadow-sky-400 hover:bg-white transition duration-300 ease-in-out">
          <Card />
        </div>
        <div className="w-full hover:shadow-md hover:shadow-sky-400 hover:bg-white transition duration-300 ease-in-out">
          <Card />
        </div>
        <div className="w-full hover:shadow-md hover:shadow-sky-400 hover:bg-white transition duration-300 ease-in-out">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
