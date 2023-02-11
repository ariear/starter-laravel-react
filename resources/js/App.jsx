import React from 'react';
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from './src/About';
import Home from './src/Home';
import Root from './src/Root';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
            path: "/",
            element: <Home />
        },
        {
            path: "about",
            element: <About />
        }
      ]
    }
]);

if(document.getElementById('root')){
    createRoot(document.getElementById('root')).render(
        <RouterProvider router={router} />
    )
}
