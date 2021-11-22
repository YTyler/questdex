import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemPage from "./screens/ItemPage";
import QuestPage from "./screens/QuestPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/questdex">
            <Route index element={<ItemPage/>}/>
            <Route path="items" element={<ItemPage/>}/>
            <Route path="quests" element={<QuestPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;