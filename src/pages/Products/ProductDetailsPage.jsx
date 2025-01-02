import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useProductById } from "../../state/queries/productQueries";
import { useDeleteProduct } from "../../state/mutations/productMutations";
import ReviewList from "../../components/Reviews/ReviewList";

function ProductDetailsPage() {
  const { id } = useParams();
  const { products: product, loading, error } = useProductById(id);
  const { mutate } = useDeleteProduct();
  const navigate = useNavigate();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>ProductDetailsPage</h1>
      {product && (
        <div>
          {/* Action Buttons */}
          <div className="flex gap-4">
            <Link to={`/products/${product.id}/edit`} state={product}>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600">
                Edit
              </button>
            </Link>
            <button
              onClick={() => mutate(product.id)}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
            <button
              onClick={() => navigate("/products")}
              className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
            >
              Go Back
            </button>
          </div>
          
          {/* Product Details */}
          <div className="p-6 bg-white rounded-md shadow">
            <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
            <p className="mt-4 text-lg text-gray-600">
              <strong className="font-medium">Price:</strong> ${product.price}
            </p>
            <p className="mt-2 text-lg text-gray-600">
              <strong className="font-medium">Description:</strong> {product.description}
            </p>
            <p className="mt-2 text-lg text-gray-600">
              <strong className="font-medium">Stock:</strong> {product.stock}
            </p>
            <div className="mt-4">
            <ReviewsToggle id={id} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetailsPage;


const ReviewsToggle = ({id}) => {
  const [reviewsShow, setReviewsShow] = useState(false);

  return (
    <div className="mt-6">
    <button
      onClick={() => setReviewsShow(!reviewsShow)}
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
    >
      {reviewsShow ? "Hide Reviews" : "Show Reviews"}
    </button>
    {reviewsShow && (
      <div className="mt-4 p-4 bg-gray-50 rounded-md shadow">
        <ReviewList productId={id} />
      </div>
    )}
  </div>
  );
};