import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import LoginPage from "./screens/LoginPage";
import NoMatch from "./screens/NoMatch";
import { useState } from "react";

function App() {

  const [log, setLog] = useState(false);

  const login = (element) => {
    setLog(element);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/questdex" >
            <Route index element={<HomePage logging = {log}/>}/>
            <Route path="login" element={<LoginPage logging = {login}/>}/> 
          </Route>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;