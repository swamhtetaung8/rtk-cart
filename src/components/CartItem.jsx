import React from "react";
import { useDispatch } from "react-redux";
import { decrease, increase, removeCartItem } from "../features/ecommerceSlice";
import { BsTrash } from "react-icons/bs";
const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const decreaseFromCart = (cartItem) => {
    if (cartItem.quantity == 1) {
      dispatch(removeCartItem(cartItem));
    } else {
      dispatch(decrease(cartItem));
    }
  };
  return (
    <li className="flex items-center gap-10">
      <img
        src={cartItem.image}
        alt=""
        className="md:h-32 md:w-32 w-16 h-16 rounded object-contain"
      />

      <div className="max-w-[200px] md:max-w-[800px]">
        <h3 className="text-sm text-gray-900">{cartItem.title}</h3>
        <div className=" mt-5">
          <span className="inline-flex divide-x overflow-hidden rounded-md border bg-white shadow-sm">
            <button
              className="inline-block px-2 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
              title="Decrease"
              onClick={() => decreaseFromCart(cartItem)}>
              -
            </button>
            <p className=" w-12 border-gray-200  p-0 text-center text-xs text-gray-600  flex items-center justify-center">
              {cartItem.quantity}
            </p>
            <button
              className="inline-block px-2 py-1 text-gray-700 hover:bg-gray-50 focus:relative"
              title="Increase"
              onClick={() => dispatch(increase(cartItem))}>
              +
            </button>
          </span>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-end gap-2">
        <form>
          <label htmlFor="Line1Qty" className="sr-only">
            {" "}
            Quantity{" "}
          </label>
        </form>
        <p className="h-8 w-20 rounded border-gray-200 bg-gray-50 p-0 text-center text-sm text-gray-600  flex items-center justify-center">
          $ {cartItem.buyPrice.toFixed(2)}
        </p>
        <button
          className="text-gray-600 transition hover:text-red-600"
          onClick={() => dispatch(removeCartItem(cartItem))}>
          <span className="sr-only">Remove item</span>

          <BsTrash />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
