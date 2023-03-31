import { useState, useRef, useEffect } from "react";
import { BiCartAlt } from "react-icons/bi";
import { FcShop } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateSearch } from "../features/ecommerceSlice";

export default () => {
  const { cart, cartQuantity } = useSelector((state) => state.productsAndCart);
  const dispatch = useDispatch();
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateSearch(formRef.current[0].value));
    formRef.current[0].value = "";
  };
  return (
    <nav className="bg-white border-b">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <div className="flex-none lg:flex-initial">
          <Link to="/">
            <FcShop size={35} />
          </Link>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <form
              className="flex items-center space-x-2 border rounded-md p-2"
              ref={formRef}
              onSubmit={handleSubmit}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-none text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                type="text"
                placeholder="Search"
              />
            </form>
            <Link to="/cart">
              <BiCartAlt size={30} color="blue" />
            </Link>
            {cart.length > 0 && (
              <p className=" bg-red-400 p-3 w-7 h-7 flex items-center justify-center rounded-full text-sm text-white">
                {cartQuantity}
              </p>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
