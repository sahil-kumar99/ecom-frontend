import React, { useEffect, useState } from "react";
import { BsBookmarkHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { UPDATEWISHLIST, UPDATEWISHREMOVE } from "../store/reducers/user";
import { ADDTOWISHLIST, REMOVEFROMWISHLIST } from "../store/actions/user";

const Card = ({ item, isWish }) => {
  const dispatch = useDispatch();
  // const data = useSelector((state) => state?.user?.wishlist);
  // const [isWishlist, setIsWishlist] = useState(false);
  const handleAddWishlist = async (item) => {
    await dispatch(ADDTOWISHLIST(item._id));
    await dispatch(UPDATEWISHLIST(item));
  };

  const handleRemoveWishlist = async (item) => {
    await dispatch(REMOVEFROMWISHLIST(item._id));
    await dispatch(UPDATEWISHREMOVE(item._id));
  };
  // useEffect(() => {
  //   console.log("---wishlist card data---", data);
  //   const isIdIncluded = data.some((itm) => itm._id === item._id);
  // }, [data]);
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      {/* <img src="product-image.jpg" alt="Product" className="w-full" /> */}
      {isWish ? (
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
      )}

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          Price: ${item.price}
        </span>
      </div>
    </div>
  );
};

export default Card;
