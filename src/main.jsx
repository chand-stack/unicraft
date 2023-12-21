import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./MainLayout/Root.jsx";
import Home from "./Components/Page/Home/Home.jsx";
import Work from "./Components/shared/Work/Work.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="how-it-works" element={<Work />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
