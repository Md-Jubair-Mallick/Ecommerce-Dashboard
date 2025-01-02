import React from "react";
import { Link, useParams } from "react-router-dom";
import { useGetOrderById } from "../../state/queries/orderQueries";

const OrderDetailsPage = () => {
  const { id } = useParams();

  const { data: order, loading, error } = useGetOrderById(id);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        Loading...
      </div>
    );
  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen text-red-500">
        Error: {error.message}
      </div>
    );

  if (!order)
    return (
      <div className="flex justify-center items-center min-h-screen text-gray-500">
        No order found.
      </div>
    );

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white rounded-xl shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Order ID: {order.id}</h1>
        <Link to={`/orders/${id}/edit`} state={order.status}>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            Edit Order
          </button>
        </Link>
      </div>

      {/* Customer Info */}
      <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Information</h2>
        <p className="text-lg"><strong>Name:</strong> {order?.customer.name}</p>
        <p className="text-lg"><strong>Email:</strong> {order?.customer.email}</p>
        <p className="text-lg"><strong>Phone:</strong> {order?.customer.phone}</p>
        <p className="text-lg"><strong>Address:</strong> {order?.customer.address}</p>
      </div>

      {/* Order Info */}
      <div className="mb-8 p-6 bg-gray-100 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Order Details</h2>
        <p className="text-lg">
          <strong>Status:</strong>{" "}
          <span
            className={`${
              order.status === "completed"
                ? "text-green-600"
                : order.status === "pending"
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {order.status}
          </span>
        </p>
        <p className="text-lg">
          <strong>Date:</strong> {new Date(order.date).toLocaleDateString()}
        </p>
        <p className="text-lg">
          <strong>Total:</strong> ${order.total_price}
        </p>
      </div>

      {/* Products in the Order */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Products</h2>
        <ul className="space-y-6">
          {order?.order_items?.map((item) => (
            <li
              key={item.id}
              className="p-6 bg-white rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition duration-300"
            >
              <p className="text-lg"><strong>Product:</strong> {item.product.name}</p>
              <p className="text-lg"><strong>Quantity:</strong> {item.quantity}</p>
              <p className="text-lg"><strong>Price:</strong> ${item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OrderDetailsPage;
