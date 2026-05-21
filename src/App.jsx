import React from "react";
import { BrowserRouter } from "react-router-dom";
import _App from "./view/_app";

const App = () => {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true, }}>
      <_App />
    </BrowserRouter>
  );
};

export default App;