import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

const Products = () => {
  const { products, searchValue } = useSelector(
    (state) => state.productsAndCart
  );

  return (
    <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-10 px-20 ">
      {searchValue == ""
        ? products.map((product) => (
            <Product key={product.id} product={product} />
          ))
        : products.map((product) => {
            if (
              product.title.toLowerCase().includes(searchValue.toLowerCase())
            ) {
              return <Product key={product.id} product={product} />;
            }
          })}
    </div>
  );
};

export default Products;
