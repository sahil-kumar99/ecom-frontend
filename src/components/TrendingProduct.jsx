import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { GETPRODUCT } from "../store/actions/product";

const TrendingProduct = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);
  const wishlistData = useSelector((state) => state?.user?.wishlist);
  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(() => {
    setTrendingProducts([...data?.products]);
  }, [data?.products]);

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
        {trendingProducts?.map((item, idx) => {
          const isIdIncluded = wishlistData.some((itm) => itm._id === item._id);
          return (
            <div
              key={idx}
              className="w-full hover:shadow-md hover:shadow-sky-400 hover:bg-white transition duration-300 ease-in-out"
            >
              <Card item={item} isWish={isIdIncluded} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingProduct;
