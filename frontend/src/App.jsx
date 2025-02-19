import React from "react";
import { BrowserRouter , Routes , Route} from "react-router-dom";
import {Login, SignUp} from "./Routes";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />


    </Routes>
    </BrowserRouter>
  );
}

export default App;
