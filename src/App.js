import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./screens/HomePage";
import ItemPage from "./screens/ItemPage";
import QuestPage from "./screens/QuestPage";
import Login from "./screens/Login";
import NoMatch from "./screens/NoMatch";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/questdex" >
            <Route index element={<HomePage/>}/>
            <Route path="items" element={<ItemPage/>}/>
            <Route path="quests" element={<QuestPage/>}/>
            <Route path="login" element={<Login/>}/> 
          </Route>
          <Route path="*" element={<NoMatch/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;