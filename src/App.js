import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ItemPage from "./screens/ItemPage";
import QuestPage from "./screens/QuestPage";
import LoginPage from "./screens/LoginPage";
import NoMatch from "./screens/NoMatch";
import { useState } from "react";

function App() {

  const [log, setLog] = useState(false);

  const login = (element) => {
    setLog(element);
    console.log(element);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/questdex" >
            <Route index element={<HomePage logging = {log}/>}/>
            <Route path="items" element={<ItemPage/>}/>
            <Route path="quests" element={<QuestPage/>}/>
            <Route path="login" element={<LoginPage logging = {login}/>}/> 
          </Route>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;