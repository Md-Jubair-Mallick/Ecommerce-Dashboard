import axios from "axios";

const fetchOrderDetails = async (id) => {
    const { data } = await axios.get(`http://localhost:3000/orders?id=${id}`)
    return data;
};
export default fetchOrderDetails