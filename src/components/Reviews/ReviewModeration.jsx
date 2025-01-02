import React, { useState } from "react";
import {
  useUpdateReview,
  useDeleteReview,
} from "../../state/mutations/reviewMutation";

const ReviewModeration = ({review}) => {
  const { mutate: mutateUpdate, loading, error } = useUpdateReview(review.id);
  const { mutate: mutateDelete } = useDeleteReview(review.id);
  const [status, setStatus] = useState(review.status);
  
  const handleStatusChange = (e) => {
    e.preventDefault();
    const newStatus = e.target.value;
    setStatus(newStatus)
      mutateUpdate({ status: newStatus });
    };
    
    if (loading) return <p>Loading reviews...</p>;
    if (error) return <p>Error: {error.message}</p>;
  return (
    <div className="actions">
      <select
        value={status}
        onChange={handleStatusChange}
      >
        <option value="">Change Status</option>
        <option value="approved">Approve</option>
        <option value="rejected">Reject</option>
      </select>
      <button
        className="btn btn-danger"
        onClick={() => mutateDelete()}
      >
        Delete
      </button>
    </div>
  );
};

export default ReviewModeration;
