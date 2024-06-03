import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.jsx'
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root/Root";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import MyDonation from "./components/MyDonation/MyDonation";
import DonationDetails from "./components/DonationDetails/DonationDetails";
import Statistics from "./components/Statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/my-donation",
        element: <MyDonation></MyDonation>,
      },
      {
        path: "/donation/:donationId",
        loader: () => fetch("../public/donation.json"),
        element: <DonationDetails></DonationDetails>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
