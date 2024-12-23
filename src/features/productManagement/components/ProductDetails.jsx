import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useProductDetails from '../hooks/useProductDetails';

const ProductDetails = () => {
    const { id } = useParams();
    const { data: product, isLoading, isError, error } = useProductDetails(id);
    const [selectedImage, setSelectedImage] = useState(null);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    if (!product) {
        return <div>No product found</div>;
    }

    // Set the first image as the default selected image if none is selected
    if (!selectedImage && product.imageUrl?.length > 0) {
        setSelectedImage(product.imageUrl[0]);
    }

    return (
        <section>
            <div>
                <div className="image-gallery">
                    {/* Display the selected image */}
                    {selectedImage && (
                        <img src={selectedImage} alt={product.productName}/>
                    )}
                </div>

                <div className="image-buttons">
                    {/* Render buttons for each image */}
                    {product.imageUrl?.map((image, index) => (
                        <button key={index} onClick={() => setSelectedImage(image)}>
                            <img src={image} alt={`${product.productName} - ${index + 1}`} style={{ width: '50px', height: '50px' }} />
                        </button>
                    ))}
                </div>

                <div>
                    <p>{product.productName}</p>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.rating}</p>
                    <p>{product.discount}</p>
                </div>
            </div>

            <div>
            {/* To Do
            * - this button will edit when order management will make
            */}
                <button onClick={() => 0}>Buy Now</button>
                <button onClick={() => 0}>Add to Cart</button>
            </div>
        </section>
    );
};

export default ProductDetails;

/** To Do
 * - Implement image navigation logic
 * - Implement Buy Now button functionality
 * - Implement Add to Cart button functionality
 * - Implement clickable small images to view product images
 */