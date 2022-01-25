import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ItemPage from "./ItemPage";
import QuestPage from "./QuestPage";

export default function HomePage(props) {
    const [itemsOpen, setItemsOpen] = useState(false);
    const [questsOpen, setQuestsOpen] = useState(false);

    const openQuest = () => {
        setItemsOpen(false);
        setQuestsOpen(true);
    };

    const openItem = () => {
        setQuestsOpen(false);
        setItemsOpen(true);
    };

    return (
        <>
            <Navbar status={props.logging} item={openItem} quest={openQuest} />
            {questsOpen && <QuestPage />}
            {itemsOpen && <ItemPage />}
        </>
    );
}
