import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import SectionHeading from "./SectionHeading";
import { useDispatch, useSelector } from "react-redux";
import { GETORDERS } from "../store/actions/order";

const OrderSection = () => {
  const dispatch = useDispatch();
  const orderData = useSelector((state) => state?.order);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    dispatch(GETORDERS());
  }, []);

  useEffect(() => {
    setLoader(false);
  }, [orderData?.orderHistory]);

  return (
    <div className="h-screen">
      <SectionHeading text={"Your Orders"} />
      <div className="text-center">
        {loader ? (
          <FontAwesomeIcon
            className="mt-10"
            icon={faSpinner}
            color="blue"
            spin
          />
        ) : (
          <div className="max-h-[400px] overflow-y-auto mt-10">
          <table className="border-collapse border m-auto mt-5">
            <thead className="bg-sky-300">
              <tr>
                <th className="border p-2">order Date</th>
                <th className="border p-2">Product</th>
                <th className="border p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {orderData?.orderHistory.map((order) =>
                order.products.map((product, idx) => {
                  const date = new Date(order.orderDate);
                  const formatedDate = format(date, "MM/dd/yyyy");
                  return (
                    <tr key={idx}>
                      {idx === 0 ? (
                        <td
                          className="border p-3"
                          rowSpan={order.products.length}
                        >
                          {formatedDate}
                        </td>
                      ) : null}
                      <td className="border p-3">{product.title}</td>
                      <td className="border p-3">
                        <span className="font-bold">&#8377;</span>&nbsp;
                        {product.price}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table></div>
        )}
      </div>
    </div>
  );
};

export default OrderSection;
