import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Error from "./pages/Error";
import VerticalNav from "./components/VerticalNav";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <VerticalNav />
      <Routes>
        <Route path="/user/:id" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
