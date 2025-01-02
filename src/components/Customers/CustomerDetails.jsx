import React from "react";
import { Link } from "react-router-dom";
import { useDeleteCustomer } from "../../state/mutations/customerMutation";
import "../../styles/Customers/CustomerDetails.css"; 

const CustomerDetails = ({ customer }) => {
  const { mutate, isLoading } = useDeleteCustomer();
  return (
    <div className="customer-details-container">
      <h2 className="customer-details-heading">Customer Details</h2>
      <div className="customer-details-actions">
        <Link
          to={`/customers/${customer.id}/edit`}
          state={customer} // Pass customer data via state
        >
          <button className="action-button edit-button">Edit</button>
        </Link>
        <button
          className={`action-button delete-button ${isLoading ? "loading" : ""}`}
          onClick={() => mutate(customer.id)}
          disabled={isLoading}
        >
          {isLoading ? "Deleting..." : "Delete"}
        </button>
      </div>

      <div className="customer-details-card">
        <h3 className="customer-name">{customer.name}</h3>
        <p>Email: <span className="customer-info">{customer.email}</span></p>
        <p>Phone: <span className="customer-info">{customer.phone}</span></p>
        <p>Address: <span className="customer-info">{customer.address}</span></p>
        <p>Status: <span className="customer-info">{customer.status}</span></p>
      </div>
    </div>
  );
};

export default CustomerDetails;
