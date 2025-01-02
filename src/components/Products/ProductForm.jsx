import React, { useState } from "react";

// function ProductForm({ initialData = {}, onSubmit, buttonText }) {
//   const [formData, setFormData] = useState({
//     name: initialData.name || "",
//     description: initialData.description || "",
//     price: initialData.price || "",
//     stock: initialData.stock || "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Find the changed fields
//     const changedData = Object.keys(formData).reduce((acc, key) => {
//       if (formData[key] !== initialData[key]) {
//         acc[key] = formData[key];
//       }
//       return acc;
//     }, {});
//     onSubmit(changedData); // Pass updated data to parent
//   };

//   return (
//     <>
//       <div>ProductForm</div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name</label>
//           <input
//             type="text"
//             name="name"
//             value={formData["name"]}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Price</label>
//           <input
//             type="number"
//             name="price"
//             value={formData["price"]}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Description</label>
//           <textarea
//             name="description"
//             value={formData["description"]}
//             onChange={handleChange}
//             required
//           ></textarea>
//         </div>
//         <div>
//           <label>Stock</label>
//           <input
//             type="number"
//             name="stock"
//             value={formData["stock"]}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">{buttonText} Product</button>
//       </form>
//     </>
//   );
// }


function ProductForm({ initialData = {}, onSubmit, buttonText }) {
  const [formData, setFormData] = useState({
    name: initialData.name || "",
    description: initialData.description || "",
    price: initialData.price || "",
    stock: initialData.stock || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-md shadow-md max-w-lg mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4">{buttonText} Product</h2>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full bg-gray-100 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-medium mb-1">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full bg-gray-100 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-medium mb-1"
        >
          Description
        </label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full bg-gray-100 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        ></textarea>
      </div>

      <div className="mb-4">
        <label htmlFor="stock" className="block text-gray-700 font-medium mb-1">
          Stock
        </label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
          className="w-full bg-gray-100 p-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
      >
        {buttonText} Product
      </button>
    </form>
  );
}

export default ProductForm;
