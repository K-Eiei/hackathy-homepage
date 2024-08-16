import React from "react";
import HomePage from "../view/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../components/layouts/layout";
import WorksPage from "../view/works";
import NotFound from "../view/_404";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/works" element={<WorksPage />} />
          <Route path="/*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
