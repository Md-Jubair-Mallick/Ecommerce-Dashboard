import React from "react";
import '../../styles/Customers/CustomerItem.css';

const CustomerItem = ({ customer, history, handleDelete }) => {
  return (
    <div className="customer-item">
      <div className="details">
        <p className="name">{customer.name}</p>
        <p className="email">{customer.email}</p>
      </div>
      <div className="actions">
        <button
          onClick={() => history.push(`/customers/edit/${customer.id}`)}
          className="edit-button"
        >
          Edit
        </button>
        <button
          onClick={handleDelete}
          className="delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default CustomerItem;
