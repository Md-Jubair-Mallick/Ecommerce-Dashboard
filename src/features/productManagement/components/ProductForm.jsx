import React, { useState } from 'react';
import { useAddProduct, useUpdateProduct } from '../hooks/useProductMutation';
import { useParams } from 'react-router-dom';
const ProductForm = () => {
    const { mutate: addProduct } = useAddProduct()
    const { mutate: updateProduct } = useUpdateProduct()
    const {item} = useParams()
    console.log(item)
    const [formData, setFormData] = useState({
        productName: '',
        description: '',
        price: '',
        discount: '',
        stock_quantity: '',
        category: '',
        brand: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        addProduct(formData);
        updateProduct(formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="productName">Name:</label><br/>
                <input 
                    type="text" 
                    id="productName" 
                    name="productName" 
                    value={formData.productName} 
                    onChange={handleChange}
                /><br/>
                
                <label htmlFor="description">Description:</label><br/>
                <input 
                    type="text" 
                    id="description" 
                    name="description" 
                    value={formData.description} 
                    onChange={handleChange}
                /><br/>

                <label htmlFor="price">Price:</label><br/>
                <input 
                    type="text" 
                    id="price" 
                    name="price" 
                    value={formData.price} 
                    onChange={handleChange}
                /><br/>

                <label htmlFor="discount">Discount:</label><br/>
                <input 
                    type="text" 
                    id="discount" 
                    name="discount" 
                    value={formData.discount} 
                    onChange={handleChange}
                /><br/>

                <label htmlFor="stock_quantity">Stock Quantity:</label><br/>
                <input 
                    type="text" 
                    id="stock_quantity" 
                    name="stock_quantity" 
                    value={formData.stock_quantity} 
                    onChange={handleChange}
                /><br/>

                <label htmlFor="category">Category:</label><br/>
                <input 
                    type="text" 
                    id="category" 
                    name="category" 
                    value={formData.category} 
                    onChange={handleChange}
                /><br/>

                <label htmlFor="brand">Brand:</label><br/>
                <input 
                    type="text" 
                    id="brand" 
                    name="brand" 
                    value={formData.brand} 
                    onChange={handleChange}
                /><br/>

                <input type="submit" value="Submit"/>
            </form>
        </>
    );
};

export default ProductForm;
