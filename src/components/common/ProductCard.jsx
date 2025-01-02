// const ProductCard = ({ product, loading, error }) => {
//   if (loading) return <p className="loading">Loading...</p>;
//   if (error) return <p className="error">Error: {error.message}</p>;

//   return (
//     product && (
//       <div className="product-card" key={product.id}>
//         <h3 className="product-name">{product.name}</h3>
//         <p className="product-price">${product.price}</p>
//         <p className="product-description">{product.description}</p>
//         <p className="product-stock">Stock: {product.stock}</p>
//         <Link to={`/products/${product.id}`}>
//           <button className="btn btn-secondary">View Details</button>
//         </Link>
//       </div>
//     )
//   );
// };
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, loading, error }) => {
  if (loading) return <tr><td colSpan="5" className="text-center">Loading...</td></tr>;
  if (error) return <tr><td colSpan="5" className="text-center text-red-500">Error: {error.message}</td></tr>;

  return (
    product && (
      <tr key={product.id} className="hover:bg-gray-50">
        <td className="border border-gray-300 p-4">{product.name}</td>
        <td className="border border-gray-300 p-4">${product.price}</td>
        <td className="border border-gray-300 p-4">{product.description}</td>
        <td className="border border-gray-300 p-4">{product.stock}</td>
        <td className="border border-gray-300 p-4">
          <Link to={`/products/${product.id}`}>
            <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
              View Details
            </button>
          </Link>
        </td>
      </tr>
    )
  );
};

// export default ProductCard;

export default ProductCard;
