import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Table from './Table.jsx';
import Scanners from './Scanners.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App Component={<Table />} />,
  },
  {
    path: "/scanners",
    element: <App Component={<Scanners />} />,
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
