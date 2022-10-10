import React from "react";
import Router from "./shared/Router";
import { useLocation } from "react-router-dom"

const App = () => {
  const location = useLocation();
  console.log("location :>> ", location);
  return (
    <div>
      <button>버튼</button>
    </div>
  )
};

export default App;