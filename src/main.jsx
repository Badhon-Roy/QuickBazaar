import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home/Home/Home';
import Products from './Pages/Home/Products/Products';
import ProductDetails from './Pages/Home/ProductDetails/ProductDetails';
import AuthProvider from './AuthProvider/AuthProvider';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Profile from './Pages/Profile/Profile';
import ShowAddCarts from './Components/ShowAddCarts';
import AllCategory from './Components/AllCategory';
import Dashboard from './Dashboard/Dashboard';
import AddProducts from './Dashboard/AddProducts';
import AllUsers from './Dashboard/AllUsers';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products/:category",
        element: <Products></Products>
      },
      {
        path: '/products/:category_name/:id',
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path : '/showAddCarts',
        element : <ShowAddCarts></ShowAddCarts>
      },
      {
        path : "/allCategory",
        element : <AllCategory></AllCategory>
      }
    ]
  },
  {
    path : "/dashboard",
    element : <Dashboard></Dashboard>,
    children : [
      {
        path : "/dashboard/addProduct",
        element : <AddProducts></AddProducts>
      },
      {
        path : "/dashboard/allUsers",
        element : <AllUsers></AllUsers>
      },
      {
        path : "/dashboard/profile",
        element : <Profile></Profile>
      }
    ]
  }
]);

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
