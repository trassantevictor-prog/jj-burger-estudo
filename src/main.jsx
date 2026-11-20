// Importa o React para construir a interface com componentes.
import React from "react";
// Importa createRoot, a API do React que conecta a aplicação ao HTML.
import { createRoot } from "react-dom/client";
// Importa o componente principal, que contém o site da hamburgueria.
import App from "./App.jsx";
// Importa os estilos globais da aplicação.
import "./styles.css";

// Localiza no HTML o elemento que receberá a aplicação.
const elementoRaiz = document.getElementById("root");

// Cria a raiz React e renderiza o componente App dentro do HTML.
createRoot(elementoRaiz).render(
  // StrictMode ajuda a identificar práticas problemáticas durante o desenvolvimento.
  <React.StrictMode>
    {/* App é o componente pai que organiza toda a página. */}
    <App />
  </React.StrictMode>
);