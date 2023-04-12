import { createBrowserRouter } from "react-router-dom"
import PaginaInicial from "../paginas/PaginaInicial"
import React from "react";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Freelando</h1>,
        children: [],
    },
]);