import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import CartFooter from "../components/CartFooter";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useSelector((state) => state.productsAndCart);

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        {cart.length == 0 && (
          <div>
            <h1 className="text-xl mt-10 font-bold text-gray-900 sm:text-3xl text-center">
              Your Cart is Empty !
            </h1>
            <Link to="/">
              <button className="block mx-auto mt-10 rounded bg-indigo-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600 uppercase">
                Add some
              </button>
            </Link>
          </div>
        )}
        {cart.length !== 0 && (
          <div className="mx-auto max-w-3xl">
            <header className="text-center">
              <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">
                Your Cart
              </h1>
            </header>

            <div className="mt-8">
              <ul className="space-y-10">
                {cart.map((cartItem) => (
                  <CartItem key={cartItem.id} cartItem={cartItem} />
                ))}
              </ul>
            </div>
            <CartFooter />
          </div>
        )}
      </div>
    </section>
  );
};

export default Cart;
