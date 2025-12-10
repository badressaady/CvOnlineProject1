import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "./AppLayout";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import Templates from "./pages/Templates";
import NotFound from "./pages/NotFound";
import Layouts from "./pages/Layouts";
import FinalPreview from "./components/finalPreview";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />, // Layout global avec Header + Footer
    children: [
      {
        path: "/",
        element: <Home />, // Page d'accueil
      },
      {
        path: "/editor",
        element: <Editor />, // Page de l'éditeur
      },
      {
        path: "/templates",
        element: <Templates />, // Page des templates
      },
      {
        path: "*",
        element: <NotFound />, // Page 404 si route inconnue
      },
      {
        path: "/Layouts",
        element: <Layouts />
      },
      {
        path: "/finalPreview",
        element: <FinalPreview />
      },

    ],
  },
]);
