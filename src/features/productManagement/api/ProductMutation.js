import axios from "axios";

// Add product
export const addProduct = async (product) => {
    try {
        const response = await axios.post('http://localhost:3000/products', product);
        return response.data;
    } catch (error) {
        console.error("Error adding product:", error);
        throw error; // Rethrow the error for further handling
    }
};

// Update product
export const updateProduct = async (id, product) => {
    try {
        const response = await axios.put(`http://localhost:3000/products/${id}`, product);
        return response.data;
    } catch (error) {
        console.error("Error updating product:", error);
        throw error; // Rethrow the error for further handling
    }
};

// Delete product
export const deleteProduct = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/products/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error deleting product:", error);
        throw error; // Rethrow the error for further handling
    }
};
