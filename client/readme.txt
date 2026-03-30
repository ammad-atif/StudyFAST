# Create the project
npm create vite@latest frontend -- --template react-ts


# Install Professional Tooling
npm install @reduxjs/toolkit react-redux react-router-dom axios lucide-react
npm install react-hook-form @hookform/resolvers zod
npm install tailwindcss @tailwindcss/vite   #works with vite7
npx storybook init


#folder structure
src/
├── assets/            # Static files (images, svgs, global icons)
├── components/        # Shared "Atomic" UI components (Button, Input, Modal)
├── config/            # Environment variables and global constants
├── features/          # The heart of your app (Module-based logic)
│   ├── auth/          # Everything related to User Auth
│   │   ├── api/       # RTK Query endpoints for Auth
│   │   ├── components/# Auth-specific components (LoginForm)
│   │   ├── hooks/     # Auth-specific logic (useAuth)
│   │   ├── types/     # TypeScript interfaces for Auth
│   │   └── authSlice.ts # Redux state for user session
│   └── posts/         # Everything related to Blog/Social Posts
├── hooks/             # Global reusable hooks (useDebounce, useLocalStorage)
├── layouts/           # Page wrappers (MainLayout, AuthLayout, DashboardLayout)
├── pages/             # Route components (Home.tsx, Login.tsx) - Minimal logic!
├── services/          # Global API clients (Axios instance, base RTK Query)
├── store/             # Redux Toolkit store configuration
├── types/             # Global/Shared TypeScript types
└── utils/             # Helper functions (formatDate, validation logic)


#return of register from react hook form
{
  name: string,      // The field name you registered
  ref: fn             // Ref callback to register the input with RHF
  onChange: fn,       // Event handler for input changes
  onBlur: fn,         // Event handler for input blur/focus loss
}

#commands
npm run dev -- --host


my-app/
├── public/
├── src/
│   ├── components/              # All your components
│   │   ├── auth/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   ├── products/
│   │   │   ├── ProductList.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── ProductDetails.jsx
│   │   ├── cart/
│   │   │   ├── Cart.jsx
│   │   │   └── CartItem.jsx
│   │   └── common/              # Shared components
│   │       ├── Button.jsx
│   │       ├── Header.jsx
│   │       └── Footer.jsx
│   │
│   ├── redux/                   # All Redux logic in one place
│   │   ├── store.js             # Store configuration
│   │   ├── slices/              # All your slices
│   │   │   ├── authSlice.js
│   │   │   ├── productsSlice.js
│   │   │   └── cartSlice.js
│   │   └── hooks.js             # Custom hooks (optional)
│   │
│   ├── pages/                   # Page components
│   │   ├── HomePage.jsx
│   │   ├── ProductsPage.jsx
│   │   └── CartPage.jsx
│   │
│   ├── services/                # API calls
│   │   ├── api.js               # Axios setup
│   │   ├── authService.js
│   │   └── productsService.js
│   │
│   ├── utils/                   # Helper functions
│   │   ├── constants.js
│   │   └── helpers.js
│   │
│   ├── styles/
│   │   └── App.css
│   │
│   ├── App.jsx
│   └── main.jsx
│
└── package.json





