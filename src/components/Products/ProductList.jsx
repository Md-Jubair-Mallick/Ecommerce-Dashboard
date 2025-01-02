import React, { useState } from "react";
import { useProducts } from "../../state/queries/productQueries.js";
import Pagination from "../common/Pagination.jsx";
import ProductCard from "../common/ProductCard.jsx";

const ProductList = () => {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const { data, loading, error } = useProducts({ page, sortBy, sortOrder });
  const products = data?.products;

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div className="p-4">

      {/* Sorting Controls */}
      <Sorting
        setSortBy={setSortBy}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {/* Table Layout */}
      <table className="table-auto border-collapse border border-gray-200 w-full text-center">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-4">Name</th>
            <th className="border border-gray-300 p-4">Price</th>
            <th className="border border-gray-300 p-4">Description</th>
            <th className="border border-gray-300 p-4">Stock</th>
            <th className="border border-gray-300 p-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {loading || error ? (
            <ProductCard loading={loading} error={error} />
          ) : (
            products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <Pagination page={page} setPage={handlePageChange} />
    </div>
  );
};

const Sorting = ({ setSortBy, sortOrder, setSortOrder }) => {
  const handleSortChange = (field) => {
    setSortBy(field);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="flex justify-end mb-4 space-x-4">
      <button
        onClick={() => handleSortChange("name")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Sort by Name
      </button>
      <button
        onClick={() => handleSortChange("price")}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Sort by Price
      </button>
    </div>
  );
};

export default ProductList;
