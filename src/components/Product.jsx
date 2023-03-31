import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/ecommerceSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="block group p-5 w-[400px] border rounded-md shadow-indigo-100 shadow-md">
      <img
        src={product.image}
        alt=""
        className="object-contain w-full rounded mx-auto h-32 "
      />

      <div className="mt-3">
        <h3 className="font-medium text-gray-900 text-xl  truncate">
          {product.title}
        </h3>
        <div className=" flex justify-between items-center mt-5">
          <p className="mt-1 text-lg text-gray-700">$ {product.price}</p>
          <button
            className=" bg-blue-600 px-3 py-2 rounded-md text-white active:scale-105 active:bg-indigo-400 duration-200 transition-all"
            onClick={() => dispatch(addToCart(product))}>
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
