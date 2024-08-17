// Import necessary libraries
import axios from 'axios';

/*
// Fetch total number of products when backend api set headers
const fetchTotalProductCount = async () => {
    const response = await axios.get('http://localhost:3000/products', {
        params: { _limit: 1 } // Get just one item to find the total count
    });
    // Adjust the parsing based on your API response
    return Number(response.headers['x-total-count']);
};
*/

// Fetch total number of products when use json server because headers is not set
const fetchTotalProductCount = async () => {
    const response = await axios.get('http://localhost:3000/products');
    return response.data.length
};

// Fetch products with pagination
const fetchProductList = async (page, sortBy, sortOrder) => {
    const totalProductCount = await fetchTotalProductCount();
    const totalPages = Math.ceil(totalProductCount / 20); // Assuming 20 items per page
    const response = await axios.get(`http://localhost:3000/products`, {
        params: {
            _page: page,
            _per_page: 20,         // Adjust the number of items per page as needed
            _sort: sortBy,      // Sort by the specified field (e.g., 'price', 'name')
            _order: sortOrder   // Sorting order: 'asc' for ascending, 'desc' for descending
        }
    });

    return { products: response.data, totalPages };
}

export default fetchProductList;

/** To Do
* - Fetch products with pagination
* - Fetch total number of products
* - Adjust the number of items per page as needed
* - Sort by the specified field (e.g., 'price', 'name')
* - Sorting order: 'asc' for ascending, 'desc' for descending
* - Prefetch products when hover a button
* - keep previous data
*/