import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartBadge = () => {
  const userData = useSelector((state) => state?.user);
  //   const [cartTotal, setCartTotal] = useState(null);
  //   useEffect(() => {
  //     setCartTotal(userData?.cartSize);
  //   }, [userData?.cartSize]);
  return <span className="badge font-extrabold sm-badge">{userData?.cartSize}</span>;
};

export default CartBadge;
