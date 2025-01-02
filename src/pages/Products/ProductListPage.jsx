import React from 'react';
import ProductList from '../../components/Products/ProductList';
import { Link } from 'react-router-dom';
// const ProductListPage = () => {
//   return (
//     <div className="grid grid-cols-4 gap-4">
//       <Link to={'/products/add'} >
//       <button>Add</button>
//       </Link>
//       <ProductList />
//     </div>
//   );
// };
const ProductListPage = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-3xl font-bold">Product List</h1>
        {/* Add New Product Button */}
        <Link to="/products/add">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Add New Product
          </button>
        </Link>
      </div>
      <ProductList />
    </div>
  );
};

export default ProductListPage;
