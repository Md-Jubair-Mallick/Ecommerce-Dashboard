import React from "react";
import ProductListPage from "./ProductListPage";
import AddProductPage from "./AddProductPage";
import ProductDetailsPage from "./ProductDetailsPage";
import EditProductPage from "./EditProductPage";
import { Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      <h1 className="mb-6 text-2xl font-semibold">Product Management</h1>
      <Outlet />
    </>
  );
}

export default Products;
