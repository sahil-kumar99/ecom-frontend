import React from "react";
import OrderTable from "./OrderTable";

const OrderDetails = () => {
  return (
    <>
      <div className="font-bold text-xl mt-5 text-center ">
        <span className="border-b-8 border-sky-400 border-r-2 border-l-2 border-t-2 p-1">
          Order Details
        </span>
      </div>
      <OrderTable />
    </>
  );
};

export default OrderDetails;
