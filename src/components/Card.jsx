import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsFillCartPlusFill } from "react-icons/bs";
import { RiDeleteBin2Fill } from "react-icons/ri";
// import { UPDATEWISHLIST, UPDATEWISHREMOVE } from "../store/reducers/user";
import {
  ADDTOCART,
  REMOVEFROMCART,
  // ADDTOWISHLIST,
  // REMOVEFROMWISHLIST,
} from "../store/actions/user";

const Card = ({ item, isWish, isCart, cart }) => {
  const dispatch = useDispatch();

  // const handleAddWishlist = async (item) => {
  //   await dispatch(ADDTOWISHLIST(item._id));
  //   await dispatch(UPDATEWISHLIST(item));
  // };

  // const handleRemoveWishlist = async (item) => {
  //   await dispatch(REMOVEFROMWISHLIST(item._id));
  //   await dispatch(UPDATEWISHREMOVE(item._id));
  // };

  const handleRemoveCart = async (item) => {
    dispatch(REMOVEFROMCART(item._id));
    // await dispatch(REMOVEFROMWISHLIST(item._id));
    // await dispatch(UPDATEWISHREMOVE(item._id));
  };
  const handleAddCart = async (item) => {
    await dispatch(ADDTOCART(item._id));
    // await dispatch(UPDATEWISHLIST(item));
  };
  // useEffect(() => {
  //   const isIdIncluded = data.some((itm) => itm._id === item._id);
  // }, [data]);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="flex">
        {/* {isWish ? (
          <AiFillHeart
            className="relative mt-2 ml-2 cursor-pointer"
            onClick={() => handleRemoveWishlist(item)}
            color="red"
            size={20}
          />
        ) : (
          <AiOutlineHeart
            className="relative mt-2 ml-2 cursor-pointer"
            onClick={() => handleAddWishlist(item)}
            size={20}
          />
        )} */}
        {!cart && (
          <BsFillCartPlusFill
            className={`relative mt-2 ml-2 ${!isCart && "cursor-pointer"}`}
            onClick={!isCart ? () => handleAddCart(item) : () => {}}
            color={isCart ? "red" : null}
            size={20}
          />
        )}
        {cart && (
          <RiDeleteBin2Fill
            className="relative mt-2 ml-2 cursor-pointer"
            onClick={() => handleRemoveCart(item)}
            color="red"
            size={20}
          />
        )}
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Price: &#8377;{item.price}
        </span>
      </div>
    </div>
  );
};

export default Card;
