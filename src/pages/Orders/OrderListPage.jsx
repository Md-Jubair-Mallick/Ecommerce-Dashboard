import React, { useState } from "react";
import { useGetOrder } from "../../state/queries/orderQueries";
import { Link } from "react-router-dom";

const OrderList = () => {
  const [filters, setFilters] = useState({
    status: "",
    startDate: "",
    endDate: "",
    sort_order: "asc",
    per_page: 10,
  });

  const { data, loading, error } = useGetOrder(filters);
  const orders = data?.orders;
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  if (loading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Error: {error.message}</div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Order List
      </h1>
      {/* Filters */}
      <div className="filters grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Status</label>
          <select
            name="status"
            value={filters.status}
            onChange={handleFilterChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="">All</option>
            <option value="pending">Pending</option>
            <option value="completed">Completed</option>
            <option value="canceled">Canceled</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            value={filters.startDate}
            onChange={handleFilterChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            End Date
          </label>
          <input
            type="date"
            name="endDate"
            value={filters.endDate}
            onChange={handleFilterChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Sort Order
          </label>
          <select
            name="sort_order"
            value={filters.sort_order}
            onChange={handleFilterChange}
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Per Page
          </label>
          <input
            type="number"
            name="per_page"
            value={filters.per_page}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                per_page: Math.max(1, parseInt(e.target.value, 10)),
              }))
            }
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
      </div>

      {/* Order List */}
      <div className="order-list space-y-4">
        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <div
              key={order.id}
              className="p-4 bg-white rounded-md shadow-md flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Order #{order.id}
                </h3>
                <p className="text-gray-600">
                  Status: <span className="font-medium">{order.status}</span>
                </p>
                <p className="text-gray-600">
                  Date:{" "}
                  <span className="font-medium">
                    {new Date(order.date).toLocaleDateString()}
                  </span>
                </p>
                <p className="text-gray-600">
                  Total:{" "}
                  <span className="font-medium">${order.total_price}</span>
                </p>
              </div>
              <Link to={`/orders/${order.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                  View Details
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No orders found</p>
        )}
      </div>
    </div>
  );
};

export default OrderList;
