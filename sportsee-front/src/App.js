import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApiProvider from "./services/ApiProvider";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";

/**
 * The App function returns the elements depending on the user route
 *
 * @return  {React.ReactElement} home || dashboard || error elements
 */

function App() {
  return (
    <BrowserRouter>
      <ApiProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:id" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ApiProvider>
    </BrowserRouter>
  );
}

export default App;
