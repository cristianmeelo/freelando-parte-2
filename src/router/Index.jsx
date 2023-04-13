import { createBrowserRouter } from "react-router-dom"
import React from "react";
import { Home } from "../pages/home/Index";
import { ClientTypeSelection } from "../pages/client-type-selection/Index";


export const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                path: "cadastro",
                element: <ClientTypeSelection />,
                children: [{
                    path: "cliente",
                    element: <h1>Interesses</h1>
                },
                {
                    path: "dados-pessoais",
                    element: <h1>Dados pessoais</h1>,
                },
                {
                    path: "concluido",
                    element: <h1>Concluido</h1>,
                }]
            }],
    },
]);