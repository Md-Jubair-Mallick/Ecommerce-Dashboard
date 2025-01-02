Ecommerce-admin-dashboard/
├── public/
│   ├── index.html           # Main HTML file
│   ├── favicon.ico          # App icon
│   └── assets/              # Static assets (images, icons, etc.)
├── src/
│   ├── api/                 # API configurations and service logic
│   │   ├── axiosInstance.js # Configured Axios instance
│   │   ├── authApi.js       # Authentication API calls
│   │   └── productApi.js    # Product-related API calls
│   │   └── orderApi.js      # Order-related API calls
│   ├── components/          # Reusable UI components
│   │   ├── common/          # Common components (buttons, modals, etc.)
│   │   ├── Header/          # Header component
│   │   ├── Sidebar/         # Sidebar component
│   │   └── Footer/          # Footer component
│   ├── contexts/            # React Contexts (if any)
│   │   └── AuthContext.jsx  # Authentication context
│   ├── hooks/               # Custom React hooks
│   │   ├── useAuth.js       # Hook for authentication logic
│   │   ├── useProducts.js   # Hook for fetching/managing products
│   │   └── useOrders.js     # Hook for fetching/managing orders
│   ├── pages/               # Page components for different routes
│   │   ├── Dashboard/       # Dashboard page
│   │   │   └── Dashboard.jsx
│   │   ├── Products/        # Product management pages
│   │   │   ├── ProductList.jsx
│   │   │   ├── CreateProduct.jsx
│   │   │   └── EditProduct.jsx
│   │   ├── Orders/          # Order management pages
│   │   │   ├── OrderList.jsx
│   │   │   └── OrderDetails.jsx
│   │   ├── Users/           # User management pages
│   │   │   ├── UserList.jsx
│   │   │   └── EditUser.jsx
│   │   ├── Auth/            # Authentication pages
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   └── Charts/          # Pages or sections with charts
│   │       └── SalesChart.jsx
│   ├── routes/              # App routing configuration
│   │   └── AppRoutes.jsx    # Routes using React Router
│   ├── state/               # State management logic
│   │   ├── queries/         # React Query configurations
│   │   │   ├── authQueries.js
│   │   │   └── productQueries.js
│   │   └── mutations/       # React Query mutation hooks
│   │       ├── authMutations.js
│   │       └── productMutations.js
│   ├── styles/              # Global and component-specific styles
│   │   ├── tailwind.css     # Tailwind CSS configurations
│   │   └── theme.css        # Custom theme definitions
│   ├── utils/               # Utility functions and helpers
│   │   ├── constants.js     # App-wide constants
│   │   ├── helpers.js       # General utility functions
│   │   └── validations.js   # Form validation logic
│   ├── App.jsx              # Main App component
│   ├── index.jsx            # Entry point of the application
│   └── config.js            # Application configuration (e.g., API base URL)
├── .env                     # Environment variables (e.g., API keys, URLs)
├── .gitignore               # Git ignore file
├── tailwind.config.js       # Tailwind CSS configuration file (if used)
├── package.json             # Dependencies and scripts
├── README.md                # Project documentation
└── yarn.lock / package-lock.json # Lock file for package manager
