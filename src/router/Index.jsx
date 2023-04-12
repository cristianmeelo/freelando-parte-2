import { createBrowserRouter } from "react-router-dom"
import React from "react";
import { Home } from "../pages/home/Index";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [],
    },
]);