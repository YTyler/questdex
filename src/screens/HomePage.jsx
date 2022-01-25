import React from "react";
import { useState } from "react/cjs/react.development";
import Navbar from "../components/Navbar";
import ItemPage from "./ItemPage";
import QuestPage from "./QuestPage";

export default function HomePage(props) {

  const [itemsOpen, setItemsOpen] = useState(false);
  const [questsOpen, setQuestsOpen] = useState(false);

  const openQuest = () => {
    if(props.userObject) {
      setItemsOpen(false);
      setQuestsOpen(true);
    }
  }

  const openItem = () => {
    if(props.userObject) {
      setQuestsOpen(false);
      setItemsOpen(true);
    }
  }

  return (
    <>
      <Navbar status = {props.logging} item = {openItem} quest = {openQuest} user = {props.userObject}/>
      {questsOpen && <QuestPage userId = {props.userObject.user_id} />}
      {itemsOpen && <ItemPage />}
    </>
  );
}
