import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home.js";
import { App } from "./components/Home.js";
import { Modal } from "./components/Home.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app" element={<base />}>
          <Route path="modal/:id" element={<Modal />} />
        </Route>
        <Route path="*" element={<p>URL Error</p>} />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
