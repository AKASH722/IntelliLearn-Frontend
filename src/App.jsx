import React from 'react';
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Python from './components/Python';
import ReactPage from './components/ReactPage';
import Java from './components/Java';

import { isAuthenticated } from './utils/isAuthenticated'; // Import the authentication check function

const router = createBrowserRouter([
    {
        path: '/',
        // element: isAuthenticated ? <Home /> : <Navigate to="/login" />, // Protect the root route
        element: true ? <Home /> : <Navigate to="/login" />,
        children: [
          {
              path: 'python',
              element: <Python />,
          },
          {
              path: 'java',
              element: <Java />,
          },
          {
              path: 'react',
              element: <ReactPage />,
          },
      ], 
    },
    {
        path: '/signup',
        element: <Signup />,
    },
    {
        path: '/login',
        element: <Login />,
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
