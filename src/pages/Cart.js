import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartSection from "../components/CartSection";

const Cart = () => {
  const userData = useSelector((state) => state?.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (!userData?.loginStatus) {
      navigate("/login");
    }
  }, []);
  return <CartSection />;
};

export default Cart;
