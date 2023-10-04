import { createBrowserRouter } from "react-router-dom";
import React from "react";
import { ClientTypeSelection } from "../pages/register/client-type-selection/Index";
import { LayoutBaseRegister } from "../pages/register/Index";
import { LayoutBase } from "../pages/Index";
import { Interested } from "../pages/register/interested/Index";
import { PersonalData } from "../pages/register/personal-data/Index";
import { Concluded } from "../pages/register/concluded/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutBase />,
    children: [
      {
        path: "cadastro",
        element: <LayoutBaseRegister />,
        children: [
          {
            path: "",
            element: <ClientTypeSelection />,
          },
          {
            path: "interesteds",
            element: <Interested />,
          },
          {
            path: "dados-pessoais",
            element: <PersonalData />,
          },
          {
            path: "concluido",
            element: <Concluded />,
          },
        ],
      },
    ],
  },
]);
