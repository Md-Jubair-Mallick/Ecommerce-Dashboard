import React from "react";
import ProductForm from "../../components/Products/ProductForm";
import { useCreateProduct } from "../../state/mutations/productMutations";

const AddProduct = () => {
  const { mutate, error } = useCreateProduct();

  const handleSubmit = async (product) => {
    mutate(product);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Add New Product</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <ProductForm onSubmit={handleSubmit} buttonText="Add" />
    </div>
  );
};

export default AddProduct;
