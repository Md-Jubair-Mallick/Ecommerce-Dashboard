import axios from "axios";

const fetchProductDetails = async (id) => {
    if (!id) {
        console.error("Product ID is required");
        throw new Error("Product ID is required");
    }
    try {
        const response = await axios.get(`http://localhost:3000/products?id=${id}`);
        return response.data[0]; // Assuming the API returns an array and you need the first item
    } catch (error) {
        console.error("Error fetching product details:", error);
        throw error;
    }
};

export default fetchProductDetails;

/** To Do:
* - Fetch and display product details.
*/