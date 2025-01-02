import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { useUpdateProduct } from "../../state/mutations/productMutations";
import ProductForm from "../../components/Products/ProductForm";

const EditProductPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location?.state || null);
  const { mutate, error } = useUpdateProduct(id);

  const handleSubmit = async (updatedData) => {
    mutate(updatedData);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Edit Product</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <ProductForm
        initialData={product}
        onSubmit={handleSubmit}
        buttonText="Update"
      />
    </div>
  );
};

export default EditProductPage;
