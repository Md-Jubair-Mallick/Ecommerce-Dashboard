import React from 'react';
import '../../styles/Customers/OrderHistory.css';

const OrderHistory = ({ orders }) => {
  return (
    <div className="order-history-container">
      <h3>Order History</h3>
      <ul>
        {orders?.map((order) => (
          <li key={order.id} className="order-item">
            <p><strong>Order ID:</strong> {order.id}</p>
            <p><strong>Date:</strong> {new Date(order.created_at).toLocaleDateString()}</p>
            <p><strong>Total:</strong> ${order.total_price}</p>
            {/* <p><strong>Items:</strong> {order.items.length}</p> */}
            {/* <p><strong>Items:</strong> {order.items.map((item) => item.name */}
            {/* ).join(', ')}</p> */}
            <p className={`order-item-status ${order.status.toLowerCase()}`}>Status: {order.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderHistory;
