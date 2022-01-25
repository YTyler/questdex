import React, { useState } from "react";
import { GiSwapBag, GiSwordSpade } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Navbar(props) {
    const [userStatus, setUserStatus] = useState(props.status);

    // Close Items and open Quests
    const openQuests = () => {
        props.quest();
    };

    // Close Quests and Open Items
    const openItems = () => {
        props.item();
    };

    return (
        <div className="Navbar">
            <div className="LeftNav">
                <Link to="/">
                    <h1>QuestDex</h1>
                </Link>
                {userStatus ? (
                    <Link to="/" onClick={() => setUserStatus(false)}>
                        <h3 className="LoginNav">Logout</h3>
                    </Link>
                ) : (
                    <Link to="/login">
                        <h3 className="LoginNav">Login/Register</h3>
                    </Link>
                )}
            </div>
            <nav className="RightNav">
                {/* Quest Icon */}
                <div className="NavButton" onClick={openQuests}>
                    <GiSwordSpade />
                    <h3>Quests</h3>
                </div>

                {/* Item Icon */}
                <div className="NavButton" onClick={openItems}>
                    <GiSwapBag />
                    <h3>Items</h3>
                </div>
            </nav>
        </div>
    );
}
