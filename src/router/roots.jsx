import { createBrowserRouter } from 'react-router-dom'
import ProductList from '../features/productManagement/components/ProductList'
import ProductDetails from '../features/productManagement/components/ProductDetails'
// import pages

// create router
const router = createBrowserRouter([
    // routes
    { path: '/', element:<ProductList/> },
    { path: '/product/details/:id', element:<ProductDetails/> }
])
export default router