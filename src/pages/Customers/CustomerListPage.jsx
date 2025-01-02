import React, { useState } from "react";
import CustomerList from "../../components/Customers/CustomerList";
import { useCustomers } from "../../state/queries/customerQueries";
import Pagination from '../../components/common/Pagination';
import { Link } from "react-router-dom";
import '../../styles/Customers/CustomerListPage.css';

const CustomerListPage = () => {
  const [status, setStatus] = useState("unblock");
  const [page, setPage] = useState(1);

  // Fetch customers using the custom hook
  const { customers, error, isLoading } = useCustomers({ status, page });

  // Handle loading state
  if (isLoading) return <div className="loading">Loading...</div>;

  // Handle error state
  if (error) return <div className="error">Error: {error.message}</div>;

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <Link to={'/customers/add'}>
        <button className="add-button">Add Customer</button>
      </Link>
      
      <div className="customer-list-container">
        <CustomerList customers={customers} status={status} setStatus={setStatus}>
          {/* Filter by status */}
          <FilterByStatus status={status} setStatus={setStatus} />
        </CustomerList>
      </div>

      {/* Pagination */}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
};

const FilterByStatus = ({ status, setStatus }) => {
  return (
    <>
      <select
        className="filter-dropdown"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="unblock">Unblock</option>
        <option value="block">Block</option>
      </select>
    </>
  );
};

export default CustomerListPage;
