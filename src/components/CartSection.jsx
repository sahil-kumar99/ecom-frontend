import React, { useEffect } from "react";
import { TbMoodEmptyFilled } from "react-icons/tb";
import { useSelector } from "react-redux";
import Card from "./Card";
import OrderDetails from "./OrderDetails";
import SectionHeading from "./SectionHeading";

const CartSection = () => {
  const { cart } = useSelector((state) => state?.user);

  return (
    <div className="container mx-auto p-4 h-screen">
      <SectionHeading text={"Cart Items"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
        {cart?.map((item, idx) => {
          // const isIdIncluded = wishlist.some((itm) => itm._id === item._id);
          // const isIdIncludedCart = cart.some((itm) => itm._id === item._id);
          return (
            <div
              key={idx}
              className="w-full hover:shadow-md hover:shadow-sky-400 hover:bg-white transition duration-300 ease-in-out"
            >
              <Card
                item={item}
                // isWish={isIdIncluded}
                // isCart={isIdIncludedCart}
                cart={true}
              />
            </div>
          );
        })}
      </div>
      {cart?.length > 0 && <OrderDetails />}
      {cart?.length < 1 && (
        <div className="flex flex-col justify-center items-center">
          <TbMoodEmptyFilled size={200} />
          <span className="font-extrabold text-lg text-red-600">
            Cart is Empty!
          </span>
        </div>
      )}
    </div>
  );
};

export default CartSection;
