import React from "react";
import { BrowserRouter } from "react-router-dom";
import _App from "./view/_app";

const App = () => {
  return (
    <BrowserRouter>
      <_App />
    </BrowserRouter>
  );
};

export default App;