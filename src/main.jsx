// src/main.jsx
import React, { useState, useEffect } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Enrutador } from "./router/Enrutador";

const TemaProvider = () => {
  const [tema, setTema] = useState(
    () => localStorage.getItem("tema") || "light"
  );

  useEffect(() => {
    document.body.className = "";
    document.body.classList.add(`tema-${tema}`);
    localStorage.setItem("tema", tema);
  }, [tema]);

  const router = createBrowserRouter(Enrutador(tema, setTema));
  return <RouterProvider router={router} />;
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TemaProvider />
  </StrictMode>
);
