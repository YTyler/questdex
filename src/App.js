import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import LoginPage from "./screens/LoginPage";
import NoMatch from "./screens/NoMatch";
import { useState } from "react";

function App() {

  const [log, setLog] = useState(false);
  const [userObj, setUserObj] = useState();

  const login = (element) => {
    setLog(element);
  }

  const user = (element) => {
    setUserObj(element);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/questdex" >
            <Route index element={<HomePage logging = {log} userObject = {userObj}/>}/>
            <Route path="login" element={<LoginPage logging = {login} user = {user}/>}/> 
          </Route>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;