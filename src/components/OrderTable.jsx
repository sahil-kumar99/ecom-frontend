import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BUYPRODUCT } from "../store/actions/order";
import { useNavigate } from "react-router-dom";
import { CLEARCART } from "../store/reducers/user";
import { CLEARORDER } from "../store/reducers/order";

const OrderTable = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state?.user);
  const orderData = useSelector((state) => state?.order);
  const totalPrice = userData?.cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  const handleOrder = () => {
    dispatch(BUYPRODUCT({ cart: userData?.cart, totalAmount: totalPrice }));
  };

  useEffect(() => {
    if (orderData?.orderSuccess) {
      dispatch(CLEARCART());
      dispatch(CLEARORDER());
      navigate("/");
    }
  }, [orderData?.orderSuccess]);
  return (
    <div className="text-center">
      <table className="border-collapse border m-auto mt-5">
        <thead>
          <tr>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2 text-center">{userData?.cart.length}</td>
            <td className="border p-2 text-center">&#8377;{totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <button
        className=" bg-violet-500 text-white py-1 px-4 mt-4 rounded hover:bg-violet-400 focus:outline-none"
        onClick={handleOrder}
      >
        Buy
      </button>
    </div>
  );
};

export default OrderTable;
