import React from "react";
import { Link } from "react-router-dom";
import '../../styles/Customers/CustomerList.css'
const CustomerList = ({ customers, children }) => {
  return (
    <div className="customer-list-container">
      <h2 className="customer-list-header">Customer List</h2>
      {/* Filter by status */}
      {children}

      {/* Customer table */}
      <table className="customer-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {customers && customers.length > 0 ? (
            customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>{customer.phone}</td>
                <td>
                  <Link
                    to={`/customers/${customer.id}`}
                    className="customer-details-link"
                  >
                    <button className="customer-more-button">More...</button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="empty-table-message">
                No customers found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerList;
