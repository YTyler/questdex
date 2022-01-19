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
      total: 10,
    },
    {
      id: 2,
      itemName: "Item Name 2",
      gameTitle: "Game Title 2",
      imageUrl: "/testPlank.jpeg",
      altText: "testPlank",
      total: 20,
    },
    {
      id: 3,
      itemName: "Item Name 3",
      gameTitle: "Game Title 3",
      imageUrl: "/testStrawberry.jpeg",
      altText: "testStrawberry",
      total: 30,
    },
    {
      id: 4,
      itemName: "Item Name 4",
      gameTitle: "Game Title 4",
      imageUrl: "/testNails.jpeg",
      altText: "testNails",
      total: 40,
    },
    {
      id: 5,
      itemName: "Item Name 5",
      gameTitle: "Game Title 5",
      imageUrl: "/testPlank.jpeg",
      altText: "testPlank",
      total: 50,
    },
    {
      id: 6,
      itemName: "Item Name 6",
      gameTitle: "Game Title 6",
      imageUrl: "/testStrawberry.jpeg",
      altText: "testStrawberry",
      total: 60,
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
