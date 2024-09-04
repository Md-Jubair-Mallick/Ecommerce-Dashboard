## Development Notes for product management

- **Remove `ReactQueryDevtools` in Production**
    - Remove `ReactQueryDevtools` from the `main.js` file when building for production
- **Fetch Products with Pagination and Sorting**:
  - Ensure that the products are fetched from the API with proper pagination and sorting mechanisms.
  - Use the provided functions `fetchProducts`, `fetchProductList`, and `useProductList` to handle these operations.
- **Important**:
  - The `fetchProductList` function currently handles pagination. If sorting is required, modify this function to include sorting parameters.
  - Remember to test the API calls to ensure that pagination and sorting work as expected.
  - Ensure proper error handling and loading states when integrating into the UI.
- **Display Products with Pagination and Sorting**:
  - Use the `ProductList` component to display a list of products fetched from the API.
  - Ensure that pagination and sorting are correctly implemented by passing the appropriate parameters to the `useProductList` hook.
  - Remember to remove `console.log` statements before deploying to production.
  - Add loading, error handling, and conditional rendering to improve user experience.
  - **Product Details**:
  - Implement the `ProductDetails` component to display product details fetched from the API.
  - Ensure that the product details are fetched correctly using the `fetchProduct` function.
  - **Product Mutation**:
  - Implement the `useProductMutation` hook to handle product creation, update, and deletion.
  - Ensure that the `ProductForm` component is updated to use the `useProductMutation`.
  - **Product Form**:
  - Implement the `ProductForm` component to handle product creation and update.
  - Ensure that the form data is sent to the API using the `useProductMutation` hook
  
  