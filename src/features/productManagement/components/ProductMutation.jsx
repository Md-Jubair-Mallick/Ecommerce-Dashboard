// ProductList.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useProductList from '../hooks/useProductList';
import '../styles/ProductList.css';
import { useDeleteProduct } from '../hooks/useProductMutation';
// Component for rendering individual product UI
const ProductItem = ({ item }) => {
  const [index, setIndex] = useState(0);
  const url = item?.imageUrl || [];
  const nextImage = () => setIndex((prev) => (prev < url.length - 1 ? prev + 1 : prev));
  const prevImage = () => setIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const { mutate } = useDeleteProduct()

  return (
    <div className="item" key={item.id}>
      <div className="image-navigation">
        {index > 0 && <button onClick={prevImage} className="nav-btn left">{'<'}</button>}
        <div className="image-gallery">
          <img src={url[index]} alt={item.productName} />
        </div>
        {index < url.length - 1 && <button onClick={nextImage} className="nav-btn right">{'>'}</button>}
      </div>
      <Link to={`/product/details/${item.id}`} className="product-link" >
        <p>{item.productName}</p>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
        <p>Discount: {item.discount}%</p>
      </Link>
      <button onClick={()=>mutate(item.id)}>Delete</button>
      <Link to={`/product/mutate/${item.id}`}>
      {/* To Do
      * - when update form page open then previous data of that item should be fill auto in all fields
      */}
      <button>Update</button>
      </Link>
    </div>
  );
};

// Component for rendering pagination buttons
const PaginationButtons = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <button
          className="prevBtn"
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>
      )}
      {[...Array(totalPages).keys()].map((i) => (
        <button
          className={`paginatedBtn ${currentPage === i + 1 ? 'active' : ''}`}
          key={i + 1}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      {currentPage < totalPages && (
        <button
          className="nextBtn"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      )}
    </div>
  );
};

const SortItem = ({ setSortBy, setSortOrder }) => {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSorting = (e) => {
    const [by, order] = e.target.value.split('-');
    setSortBy(by);
    setSortOrder(order);
    setSelectedValue(e.target.value);
  };

  return (
    <select className="sort-dropdown" value={selectedValue} onChange={handleSorting}>
      <option value="productName-asc">Sort by default</option>
      <option value="price-asc">Price: Low to High</option>
      <option value="price-desc">Price: High to Low</option>
      <option value="discount-asc">Discount: Low to High</option>
      <option value="discount-desc">Discount: High to Low</option>
    </select>
  );
};

const ProductList_ = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('productName');
  const [sortOrder, setSortOrder] = useState('asc');
  const { products, totalPages, error, isLoading, isFetching, isError } = 
  useProductList(currentPage, sortBy, sortOrder);

  if (isLoading || isFetching) return <p>Loading...</p>;
  if (isError) return <p>Error loading products: {error.message}</p>;

  return (
    <section className="productsSection">
      <SortItem setSortBy={setSortBy} setSortOrder={setSortOrder} /><br /><br />
      <div id="products">
        {products?.map((item) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </div>
      <PaginationButtons
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </section>
  );
};

const ProductMutation =()=>{
  return(
    <>
    <button>Add Product</button>
    <ProductList_/>
    </>
  )
}
export default ProductMutation