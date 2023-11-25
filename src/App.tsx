import React from "react";
import { Routes, Route } from "react-router-dom";
import { Router } from "./data/router";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import ArticlePage from "./pages/ArticlePage/ArticlePage";

function App() {
  return (
    <Routes>
      <Route path={Router.Home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={Router.Events} element={<ArticlePage />} />
      </Route>
    </Routes>
  );
}

export default App;
