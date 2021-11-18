import React from "react";
import Item from "../components/Item";

export default function ItemPage() {
  const testItem = {
    itemName: "Item Name",
    gameTitle: "Game Title",
    imageUrl: "",
    altText: "altText",
  };
  return (
    <div className="ItemPage">
      <Item item={testItem}></Item>
    </div>
  );
}
