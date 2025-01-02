import React from "react";
import CustomerForm from "../../components/Customers/CustomerForm";
import axios from "../../api/axiosInstance";
import { useCreateCustomer } from "../../state/mutations/customerMutation";
import '../../styles/Customers/AddCustomerPage.css';

const AddCustomerPage = () => {
  const { mutate } = useCreateCustomer();
  const handleAddCustomer = async (customerData) => {
    mutate(customerData);
  };

  return (
    <div className="add-customer-page">
  <CustomerForm
    onSubmit={handleAddCustomer}
    buttonText="Add"
  />
</div>

  );
};

export default AddCustomerPage;