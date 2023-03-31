import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkOut } from "../features/ecommerceSlice";
import { useNavigate } from "react-router-dom";

const CartFooter = () => {
  const { totalPrice } = useSelector((state) => state.productsAndCart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const goBackHome = () => {
    alert("Thank you for your purchase");
    dispatch(checkOut());
    navigate("/");
  };
  return (
    <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
      <div className="w-screen max-w-lg space-y-4">
        <dl className="space-y-0.5 text-sm text-gray-700">
          <div className="flex justify-between !text-base font-medium">
            <dt>Total</dt>
            <dd>$ {totalPrice.toFixed(2)}</dd>
          </div>
        </dl>

        <div className="flex justify-end">
          <button
            onClick={goBackHome}
            className="block rounded bg-indigo-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartFooter;
