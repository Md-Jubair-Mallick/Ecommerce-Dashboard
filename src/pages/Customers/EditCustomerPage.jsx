import React, { useState } from "react";
import CustomerForm from "../../components/Customers/CustomerForm";
import { useUpdateCustomer } from "../../state/mutations/customerMutation";
import { useLocation, useParams } from "react-router-dom";
import '../../styles/Customers/EditCustomerPage.css';

const EditCustomerPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const [customer, setCustomer] = useState(location?.state || null);
  const { mutate } = useUpdateCustomer(id);

  const handleSubmit = (updatedData) => {
    mutate(updatedData);
  };

  return (
    <div className="EditCustomerPage"> {/* Add the custom class here */}
      <div className="form-container"> {/* Add the custom class here */}
        <h1>Edit Customer</h1>
        <CustomerForm
          initialData={customer}
          onSubmit={handleSubmit}
          buttonText="Update"
        />
      </div>
    </div>
  );
};

export default EditCustomerPage;