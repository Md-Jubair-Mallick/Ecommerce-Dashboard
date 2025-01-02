import React, { useState } from "react";
import CustomerDetails from "../../components/Customers/CustomerDetails";
import OrderHistory from "../../components/Customers/OrderHistory";
import { useCustomerById } from "../../state/queries/customerQueries";
import { useParams } from "react-router-dom";
import '../../styles/Customers/CustomerDetailsPage.css';

const CustomerDetailsPage = () => {
  const { id } = useParams();
  const { customer, error, loading } = useCustomerById(id);
  const orders = customer?.orders;

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Error: {error.message}</p>;

  return (
    <div className="container">
      {customer && (
        <div className="customer-details">
          <CustomerDetails customer={customer} />
        </div>
      )}
      {orders && orders.length > 0 ? (
        <div className="order-history">
          <OrderHistory orders={orders} />
        </div>
      ) : (
        <p className="no-orders-message">No orders found for this customer.</p>
      )}
    </div>
  );
};

export default CustomerDetailsPage;
