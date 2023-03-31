import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Products from "../components/Products";
import { getProducts, updateSearch } from "../features/ecommerceSlice";

const Home = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const fetchProducts = async () => {
    const api = await fetch("https://fakestoreapi.com/products");
    const data = await api.json();
    const newProducts = data.map((el) => {
      el = { ...el, buyPrice: 0, added: false, quantity: 0 };
      return el;
    });
    dispatch(getProducts(newProducts));
    dispatch(updateSearch(""));
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);
    fetchProducts();
  }, []);
  return (
    <>
      {loading ? (
        <div className=" h-[80vh] w-full flex items-center justify-center">
          <div
            className="animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-blue-600 rounded-full "
            role="status"
            aria-label="loading">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      ) : (
        <Products />
      )}
    </>
  );
};

export default Home;
