import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return <h1>Rendering</h1>;
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
