import React from 'react';
import '../styles/OrderDetails.css'; // Assuming you want to add custom styles here
import useOrderDetails from '../hooks/useOrderDetails';
import { useParams } from 'react-router-dom';
const OrderDetails = () => {
    const { id } = useParams()
    const { order, error, isLoading, isError, customer, customerError, customerIsError, customerIsLoading } = useOrderDetails(id);
    // const { customer, orderItems, totalAmount, orderDate, status } = useOrderDetails(id);
console.log(order)
    return (<>
        {isError && <h1>order: {error?.message}</h1>}
        {customerIsError && <h1>customer: {customerError?.message}</h1>}
        <div className="order-details-container">
            <h2>Order Details</h2>
            {/* Order Overview */}
            {order && <div className="order-overview">
                <span><strong>Order ID:</strong> {order.id}</span>
                <span><strong>Order Date:</strong> {new Date(order.orderDate).toLocaleDateString()}</span>
                <span><strong>Status:</strong> {order.status}</span>
                <span><strong>Total Amount:</strong> ${order.totalAmount}</span>
            </div>
            }

            {/* Customer Information */}
            {customer && <div className="customer-info">
                <h3>Customer Information</h3>
                <p><strong>Customer ID:</strong> {order.customer_id}</p>
                <p><strong>Name:</strong> {customer.name}</p>
                <p><strong>Email:</strong> {customer.email}</p>
                <p><strong>Phone:</strong> {customer.phone}</p>
            </div>}

            {/* Product Information */}
            <div className="order-items">
                <h3>Products in Order</h3>
                {order?.orderItems?.map((item, index) => (
                    <div className="product-item" key={index}>
                        <p><strong>Product ID:</strong> {item.product_id}</p>
                        <p><strong>Quantity:</strong> {item.quantity}</p>
                        <p><strong>Price:</strong> ${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default OrderDetails;
