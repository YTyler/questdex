import React from "react";
import { GiSwapBag, GiSwordSpade } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="LeftNav">
        <h1>QuestDex</h1>
        <Link to="/login">
          <h3 className="LoginNav">Login/Register</h3>
        </Link>
      </div>
      <nav className="RightNav">
        <Link to="quests" className="NavButton">
          <GiSwordSpade />
          <h3>Quests</h3>
        </Link>
        <Link to="items" className="NavButton">
          <GiSwapBag />
          <h3>Items</h3>
        </Link>
      </nav>
    </div>
  );
}
