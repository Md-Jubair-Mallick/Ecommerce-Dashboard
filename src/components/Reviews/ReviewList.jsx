// import React, { useState } from "react";
// import { useGet } from "../../state/queries/reviewQueries";
// import ReviewModeration from "./ReviewModeration";
// const ReviewList = (productId) => {
//   const [filters, setFilters] = useState({
//     product_id: productId,
//     rating: "",
//   });
  
//   const { data, loading, error } = useGet(filters);
//   const reviews = data?.data;

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div>
//       <h1>Product Reviews</h1>

//       {/* Filters */}
//       <div className="filters">
//         <label>
//           Rating:
//           <select
//             name="rating"
//             value={filters.rating}
//             onChange={handleFilterChange}
//           >
//             <option value="">All Ratings</option>
//             <option value="5">5 Stars</option>
//             <option value="4">4 Stars</option>
//             <option value="3">3 Stars</option>
//             <option value="2">2 Stars</option>
//             <option value="1">1 Star</option>
//           </select>
//         </label>
//       </div>

//       {/* Review List */}
//       <div className="review-list">
//         {reviews && reviews.length > 0 ? (
//           reviews.map((review) => (
//             <div key={review.id} className="card">
//               <ReviewModeration review={review} />
//               <h3>Review by {review?.customer?.name}</h3>
//               {/* <p>Product name: {review?.product?.name}</p> */}
//               <p>Rating: {review.rating} / 5</p>
//               <p>{review.comment}</p>
//               <small>Date: {new Date(review.date).toLocaleDateString()}</small>
//             </div>
//           ))
//         ) : (
//           <p>No reviews found</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ReviewList;

import React, { useState } from "react";
import { useGet } from "../../state/queries/reviewQueries";
import ReviewModeration from "./ReviewModeration";

const ReviewList = ({ productId }) => {
  const [filters, setFilters] = useState({
    product_id: productId,
    rating: "",
  });

  const { data, loading, error } = useGet(filters);
  const reviews = data?.data;

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (loading) return <div className="text-center text-gray-500">Loading...</div>;
  if (error) return <div className="text-center text-red-500">Error: {error.message}</div>;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Product Reviews</h1>

      {/* Filters */}
      <div className="mb-4 flex items-center space-x-4">
        <label className="text-lg text-gray-600">Rating:</label>
        <select
          name="rating"
          value={filters.rating}
          onChange={handleFilterChange}
          className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          <option value="">All Ratings</option>
          <option value="5">5 Stars</option>
          <option value="4">4 Stars</option>
          <option value="3">3 Stars</option>
          <option value="2">2 Stars</option>
          <option value="1">1 Star</option>
        </select>
      </div>

      {/* Review List Table */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        {reviews && reviews.length > 0 ? (
          reviews.map((review) => (
            <div key={review.id} className="p-4 border-b border-gray-200 hover:bg-gray-50 transition duration-300 ease-in-out">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-700">{review?.customer?.name}</h3>
                  <p className="mt-2 text-gray-600">Product name: {review?.product?.name}</p>
                  <p className="text-sm text-gray-500">Rating: {review.rating} / 5</p>
                  <p className="mt-2 text-gray-600">{review.comment}</p>
                  <small className="text-gray-400">{new Date(review.date).toLocaleDateString()}</small>
                </div>
                <ReviewModeration review={review} />
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No reviews found</p>
        )}
      </div>
    </div>
  );
};

export default ReviewList;
