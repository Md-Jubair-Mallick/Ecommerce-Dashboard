import React from "react";
import { createBrowserRouter } from "react-router-dom";
// Auth
import Register from "../pages/Auth/Register.jsx";
import Login from "../pages/Auth/Login.jsx";
// Products
import Products from "../pages/Products/Products.jsx";
import ProductListPage from "../pages/Products/ProductListPage.jsx";
import ProductDetailsPage from "../pages/Products/ProductDetailsPage.jsx";
import AddProductPage from "../pages/Products/AddProductPage.jsx";
import EditProductPage from "../pages/Products/EditProductPage.jsx";
// Customers
import CustomerListPage from "../pages/Customers/CustomerListPage.jsx";
import CustomerDetailsPage from "../pages/Customers/CustomerDetailsPage.jsx";
import AddCustomerPage from "../pages/Customers/AddCustomerPage.jsx";
import EditCustomerPage from "../pages/Customers/EditCustomerPage.jsx";
// Orders
import OrderListPage from "../pages/Orders/OrderListPage.jsx";
import OrderDetailsPage from "../pages/Orders/OrderDetailsPage.jsx";
import UpdateOrderStatus from "../pages/Orders/UpdateOrderStatus.jsx";
// Reviews
import ReviewList from "../components/Reviews/ReviewList.jsx";
// Layout
import Layout from "../components/Layout/Layout.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import Me from "../pages/Dashboard/me.jsx";
// Protected Route
import ProtectedRoute from "../components/ProtectedRoute";

// Mock authentication and user role data
const isAuthenticated = true; // Replace with real authentication logic
const userRole = "admin"; // Replace with the actual user role from your authentication system

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      /*
       * Auth Routes
       */
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { 
        path: "me", 
        element: (
          <ProtectedRoute isAuth={isAuthenticated} roles={["admin", "editor", "viewer"]} userRole={userRole}>
            <Me />
          </ProtectedRoute>
        ),
      },

      /*
       * Product Routes
       */
      {
        path: "products",
        element: (
          <ProtectedRoute isAuth={isAuthenticated} roles={["admin", "editor"]} userRole={userRole}>
            <Products />
          </ProtectedRoute>
        ),
        children: [
          { 
            path: "", 
            element: <ProductListPage /> 
          },
          { 
            path: "add", 
            element: (
              <ProtectedRoute isAuth={isAuthenticated} roles={["admin"]} userRole={userRole}>
                <AddProductPage />
              </ProtectedRoute>
            )
          },
          { 
            path: ":id", 
            element: <ProductDetailsPage /> 
          },
          { 
            path: ":id/edit", 
            element: (
              <ProtectedRoute isAuth={isAuthenticated} roles={["admin"]} userRole={userRole}>
                <EditProductPage />
              </ProtectedRoute>
            )
          },
        ],
      },

      /*
       * Customer Routes
       */
      {
        path: "customers",
        element: (
          <ProtectedRoute isAuth={isAuthenticated} roles={["admin"]} userRole={userRole}>
            <CustomerListPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "customers/add",
        element: (
          <ProtectedRoute isAuth={isAuthenticated} roles={["admin"]} userRole={userRole}>
            <AddCustomerPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "customers/:id",
        element: (
          <ProtectedRoute isAuth={isAuthenticated} roles={["admin"]} userRole={userRole}>
            <CustomerDetailsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "customers/:id/edit",
        element: (
          <ProtectedRoute isAuth={isAuthenticated} roles={["admin"]} userRole={userRole}>
            <EditCustomerPage />
          </ProtectedRoute>
        ),
      },

      /*
       * Order Routes
       */
      {
        path: "orders",
        element: (
          <ProtectedRoute isAuth={isAuthenticated} roles={["admin", "editor"]} userRole={userRole}>
            <OrderListPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "orders/:id",
        element: (
          <ProtectedRoute isAuth={isAuthenticated} roles={["admin", "editor"]} userRole={userRole}>
            <OrderDetailsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: "orders/:id/edit",
        element: (
          <ProtectedRoute isAuth={isAuthenticated} roles={["admin"]} userRole={userRole}>
            <UpdateOrderStatus />
          </ProtectedRoute>
        ),
      },

      /*
       * Review Routes
       */
      {
        path: "reviews",
        element: (
          <ProtectedRoute isAuth={isAuthenticated} roles={["admin", "editor", "viewer"]} userRole={userRole}>
            <ReviewList />
          </ProtectedRoute>
        ),
      },

      /*
       * Dashboard
       */
      {
        path: "/",
        element: (
          <ProtectedRoute isAuth={isAuthenticated} roles={["admin", "editor", "viewer"]} userRole={userRole}>
            <Dashboard />
          </ProtectedRoute>
        ),
      },

      /*
       * Error Route
       */
      { path: "*", element: <h1>404 Not Found</h1> },
    ],
  },
]);

export default AppRoutes;
