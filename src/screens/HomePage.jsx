import React from "react";
import { useState } from "react/cjs/react.development";
import Navbar from "../components/Navbar";
import ItemPage from "./ItemPage";
import QuestPage from "./QuestPage";

export default function HomePage(props) {
    const [itemsOpen, setItemsOpen] = useState(false);
    const [questsOpen, setQuestsOpen] = useState(false);
    const [user, setUser] = useState(props.userObject);

    const openQuest = () => {
        if (user) {
            setItemsOpen(false);
            setQuestsOpen(true);
        }
    };

    const openItem = () => {
        if (user) {
            setQuestsOpen(false);
            setItemsOpen(true);
        }
    };

    const closeAll = () => {
        setQuestsOpen(false);
        setItemsOpen(false);
        setUser("");
    };

    return (
        <>
            <Navbar
                status={props.logging}
                item={openItem}
                quest={openQuest}
                user={props.userObject}
                logout={closeAll}
            />
            {questsOpen && <QuestPage userId={props.userObject.user_id} />}
            {itemsOpen && <ItemPage />}
        </>
    );
}
