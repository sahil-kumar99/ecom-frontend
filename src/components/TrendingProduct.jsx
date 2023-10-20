import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { GETPRODUCT } from "../store/actions/product";
import SectionHeading from "./SectionHeading";

const TrendingProduct = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.product);
  const { wishlist, cart } = useSelector((state) => state?.user);
  const [trendingProducts, setTrendingProducts] = useState([]);
  useEffect(() => {
    setTrendingProducts([...data?.products]);
  }, [data?.products]);

  useEffect(() => {
    dispatch(GETPRODUCT());
  }, []);

  return (
    <div className="container mx-auto p-4">
      <SectionHeading text={"Trending Products"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
        {trendingProducts?.map((item, idx) => {
          const isIdIncluded = wishlist.some((itm) => itm._id === item._id);
          const isIdIncludedCart = cart.some((itm) => itm._id === item._id);
          return (
            <div
              key={idx}
              className="w-full hover:shadow-md hover:shadow-sky-400 hover:bg-white transition duration-300 ease-in-out"
            >
              <Card
                item={item}
                isWish={isIdIncluded}
                isCart={isIdIncludedCart}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrendingProduct;
