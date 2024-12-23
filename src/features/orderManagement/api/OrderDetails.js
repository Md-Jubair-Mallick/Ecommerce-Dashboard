import axios from "axios";

export const fetchOrderDetails = async (id) => {
    const { data } = await axios.get(`http://localhost:3000/orders?id=${id}`)
    console.log(data)
    return data[0];
};

export const fetchCustomerDetails = async (id) => {
    const { data } = await axios.get(`http://localhost:3000/customers?id=${id}`)
    console.log(data)
    return data[0];
}