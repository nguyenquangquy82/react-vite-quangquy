import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import RegisterPage from './pages/register.jsx';
import UsersPage from './pages/user.jsx';
import ProductsPage from './pages/product.jsx';
import './styles/global.css';
import ToDoApp from './components/todo/ToDoApp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        index :true,
        element: <ToDoApp/>
      },
      {
        path: "/users",
        element: <UsersPage/>
      },
      {
        path: "/products",
        element: <ProductsPage/>
      },
      
    ]
  },
  {
    path: "/login",
    element: <LoginPage/>
  },
  {
    path: "/register",
    element: <RegisterPage/>
  },
 
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />

  </React.StrictMode>,
)
