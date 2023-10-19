import React from "react";
import { useSelector } from "react-redux";

const OrderTable = () => {
  const userData = useSelector((state) => state?.user);
  const totalPrice = userData?.cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);
  return (
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
  );
};

export default OrderTable;
