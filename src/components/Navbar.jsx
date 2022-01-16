import React, { useState } from "react";
import { GiSwapBag, GiSwordSpade } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Navbar(props) {

  const [userStatus, setUserStatus] = useState(props.status);

  return (
    <div className="Navbar">
      <div className="LeftNav">
        <Link to="/questdex">
          <h1>QuestDex</h1>
        </Link>
        {userStatus ?
          <Link to="/questdex" onClick={() => setUserStatus(false)}>
            <h3 className="LoginNav">Logout</h3>
          </Link> :
          <Link to="/questdex/login">
            <h3 className="LoginNav">Login/Register</h3>
          </Link>
        }
      </div>
      <nav className="RightNav">
        <Link to="/questdex/quests" className="NavButton">
          <GiSwordSpade />
          <h3>Quests</h3>
        </Link>
        <Link to="/questdex/items" className="NavButton">
          <GiSwapBag />
          <h3>Items</h3>
        </Link>
      </nav>
    </div>
  );
}
