import React, { useState } from "react";
import '../../styles/Customers/CustomerForm.css'
const CustomerForm = ({ initialData = {}, onSubmit, buttonText }) => {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    email: initialData.email || "",
    phone: initialData.phone || "",
    address: initialData.address || "",
    status: initialData.status || "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const changedData = Object.keys(formData).reduce((acc, key) => {
      if (formData[key] !== initialData[key]) {
        acc[key] = formData[key];
      }
      return acc;
    }, {});
    onSubmit(changedData);
  };

  return (
    <form onSubmit={handleSubmit} className="customer-form">
      <h2 className="form-title">{buttonText} Customer</h2>

      {["name", "email", "phone", "address", "status"].map((field) => (
        <div key={field} className="form-group">
          <label htmlFor={field} className="form-label">
            {field.charAt(0).toUpperCase() + field.slice(1)}
          </label>
          <input
            type={field === "email" ? "email" : "text"}
            id={field}
            value={formData[field]}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>
      ))}

      <button type="submit" className="form-button">
        {buttonText} Customer
      </button>
    </form>
  );
};

export default CustomerForm;
