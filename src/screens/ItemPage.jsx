import React from "react";
import Item from "../components/Item";

export default function ItemPage() {
  const testItems = [
    {
      id: 1,
      itemName: "Item Name",
      gameTitle: "Game Title",
      imageUrl: "/testNails.jpeg",
      altText: "testNails",
    },
    {
      id: 2,
      itemName: "Item Name 2",
      gameTitle: "Game Title 2",
      imageUrl: "/testPlank.jpeg",
      altText: "testPlank",
    },
    {
      id: 3,
      itemName: "Item Name 3",
      gameTitle: "Game Title 3",
      imageUrl: "/testStrawberry.jpeg",
      altText: "testStrawberry",
    },
  ];
  return (
    <div className="ItemPage">
      {testItems.map((testItem) => (
        <Item item={testItem} key={testItem.id} />
      ))}
    </div>
  );
}
