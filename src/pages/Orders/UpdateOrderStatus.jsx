import React, { useState } from "react";
import { useUpdateOrder } from "../../state/mutations/orderMutation";
import { useLocation, useParams } from "react-router-dom";

const UpdateOrderStatus = () => {
  const { id } = useParams();
  const location = useLocation();
  const [status, setStatus] = useState(location?.state);
  const { mutate, isLoading, isError, error } = useUpdateOrder(id);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus(newStatus);
    mutate({ status: newStatus });
  };

  return (
    <div className="max-w-2xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Update Order Status</h1>
      <h3 className="text-xl font-semibold text-gray-700 mb-6">Current Status: {status}</h3>

      {/* Status Buttons */}
      <div className="grid grid-cols-2 gap-4">
        {["pending", "shipped", "processing", "delivered", "cancelled"].map((statusOption) => (
          <button
            key={statusOption}
            value={statusOption}
            onClick={handleStatusChange}
            className={`w-full py-3 rounded-md text-white font-semibold ${getStatusButtonClass(
              statusOption
            )}`}
            disabled={isLoading}
          >
            {statusOption.charAt(0).toUpperCase() + statusOption.slice(1)}
          </button>
        ))}
      </div>

      {/* Loading and Error States */}
      {isLoading && <p className="mt-4 text-gray-500">Updating status...</p>}
      {isError && <p className="mt-4 text-red-500">Error: {error.message}</p>}
    </div>
  );
};

// Helper function to get button classes based on status
const getStatusButtonClass = (status) => {
  switch (status) {
    case "pending":
      return "bg-yellow-500 hover:bg-yellow-600";
    case "shipped":
      return "bg-green-500 hover:bg-green-600";
    case "processing":
      return "bg-blue-500 hover:bg-blue-600";
    case "delivered":
      return "bg-purple-500 hover:bg-purple-600";
    case "cancelled":
      return "bg-red-500 hover:bg-red-600";
    default:
      return "bg-gray-500";
  }
};

export default UpdateOrderStatus;
