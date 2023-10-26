import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BUYPRODUCT, CREATEPAYMENT } from "../store/actions/order";
import { useNavigate } from "react-router-dom";
import { CLEARCART, LOADER } from "../store/reducers/user";
import { CLEARORDER } from "../store/reducers/order";
import toast from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const OrderTable = () => {
  const [loader, setLoader] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state?.user);
  const orderData = useSelector((state) => state?.order);
  const totalPrice = userData?.cart.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.price;
  }, 0);

  const seting_dsts = useRef(false);

  const handleOrder = () => {
    setLoader(true);
    seting_dsts.current = false;
    dispatch(BUYPRODUCT({ cart: userData?.cart, totalAmount: totalPrice }));
  };

  useEffect(() => {
    console.log("---useeffect inside order", orderData?.orderObject);
    if (seting_dsts.current == false) {
      if (orderData?.orderObject) {
        const { user } = JSON.parse(localStorage.getItem("user"));
        console.log("---useeffect>>>>>>>>>>>>", orderData?.orderObject);
        const options = {
          key: "rzp_test_rcJDOMsASBNgQX",
          amount: orderData?.orderObject?.amount,
          currency: orderData?.orderObject?.currency,
          order_id: orderData?.orderObject?.id,
          name: "Ecom Corp",
          description: "Test Transaction",
          handler: async (response) => {
            console.log("---order response---", response);
            const {
              razorpay_order_id,
              razorpay_payment_id,
              razorpay_signature,
            } = response;

            // save payment in db
            dispatch(
              CREATEPAYMENT({
                order_id: localStorage.getItem("orderId"),
                razorpay_order_id,
                razorpay_payment_id,
                order_status: "success",
              })
            );
            // toast.success(
            //   `Payment successful. Payment ID: ${response.razorpay_payment_id}`
            // );
            // // redirect or perform other actions here after a successful payment.
            setLoader(false);
            dispatch(CLEARCART());
            // dispatch(CLEARORDER());
            // navigate("/");
          },
          modal: {
            escape: false,
            ondismiss: function () {
              setLoader(false);
            },
          },
          prefill: {
            name: user.username,
            email: user.email,
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#38BDF8",
          },
        };

        const rzp = new window.Razorpay(options);
        console.log(rzp, "rzprzp");
        rzp.on("payment.failed", function (response) {
          // alert("payment failed");
          dispatch(
            CREATEPAYMENT({
              order_id: localStorage.getItem("orderId"),
              razorpay_order_id: response?.error?.metadata.order_id,
              razorpay_payment_id: response?.error?.metadata.payment_id,
              order_status: "failed",
            })
          );
          rzp.close();
          toast.error("payment failed");
        });
        rzp.open();
        seting_dsts.current = true;
      }
    }

    // if (orderData?.orderSuccess) {
    //   navigate("/");
    // }
  }, [orderData]);

  useEffect(() => {
    console.log("---order sucess--");
    if (orderData?.orderSuccess) {
      // dispatch(CLEARCART());
      dispatch(CLEARORDER());
      navigate("/");
    }
  }, [orderData]);
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
        {loader && (
          <>
            &nbsp;
            <FontAwesomeIcon icon={faSpinner} spin />
          </>
        )}
      </button>
    </div>
  );
};

export default OrderTable;
