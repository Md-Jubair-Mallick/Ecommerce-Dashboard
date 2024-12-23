import { createBrowserRouter } from 'react-router-dom'
import ProductList from '../features/productManagement/components/ProductList'
import ProductDetails from '../features/productManagement/components/ProductDetails'
import ProductForm from '../features/productManagement/components/ProductForm'
import ProductMutation from '../features/productManagement/components/ProductMutation'
// import ProductList_ from '../features/productManagement/components/ProductMutation'
// import pages

// create router
const router = createBrowserRouter([
    // routes
    { path: '/', element:<ProductList/> },
    // { path: '/products', element:<ProductList_/> },
    { path: '/products', element:<ProductMutation/> },
    { path: '/product/details/:id', element:<ProductDetails /> },
    { path: '/product/mutate/:id', element:<ProductForm /> }
])
export default router