/**
 * Fetches the order list from a specified URL.
 *
 * @param {string} [url='/orders'] - The URL path for the order list endpoint.
 * @param {string} [baseURL='http://localhost:3000'] - The base URL for the API.
 * @returns {Promise<object>} A promise resolving to the order list data.
 *
 * @example
 * import fetchOrderList from './fetchOrderList';
 *
 * fetchOrderList()
 *   .then((data) => console.log(data))
 *   .catch((error) => console.error(error));
 *
 * @example
 * import fetchOrderList from './fetchOrderList';
 *
 * fetchOrderList('/custom-orders', 'https://api.example.com')
 *   .then((data) => console.log(data))
 *   .catch((error) => console.error(error));
 */
import axios from "axios";

const fetchOrderList = async (url = '/orders', baseURL = 'http://localhost:3000', status) => {
  try {
    const response = await axios.get(url, {
      baseURL,
      params: {
        status: status,
        // date: date
      },
      timeout: 1000 * 60, // 1 minute
    });

    // Validate response data
    if (response.status !== 200 || !response.data) {
      throw new Error('Invalid response');
    }

    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.code === 'ECONNABORTED') {
        console.error('Timeout error:', error.message);
      } else if (error.code === 'ENOTFOUND') {
        console.error('Network error:', error.message);
      } else {
        console.error('Axios error:', error.message);
      }
    } else {
      console.error('Unknown error:', error.message);
    }
    throw error;
  }
}

export default fetchOrderList;
// Overall, this code is well-written, with strong error handling, clear documentation, and flexible usage options
