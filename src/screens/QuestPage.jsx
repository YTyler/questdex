import React from "react";
import Quest from "../components/Quest";
import Navbar from "../components/Navbar";

export default function QuestPage() {
  const testQuests = [
    {
      id: 1,
      questName: "Quest Name",
      gameTitle: "Game Title",
      imageUrl: "/testNails.jpeg",
      altText: "testNails",
    },
    {
      id: 2,
      questName: "Quest Name 2",
      gameTitle: "Game Title 2",
      imageUrl: "/testPlank.jpeg",
      altText: "testPlank",
      total: 20,
    },
    {
      id: 3,
      questName: "Quest Name 3",
      gameTitle: "Game Title 3",
      imageUrl: "/testStrawberry.jpeg",
      altText: "testStrawberry",
      total: 30,
    },
    {
      id: 4,
      questName: "Quest Name 4",
      gameTitle: "Game Title 4",
      imageUrl: "/testNails.jpeg",
      altText: "testNails",
      total: 40,
    },
    {
      id: 5,
      questName: "Quest Name 5",
      gameTitle: "Game Title 5",
      imageUrl: "/testPlank.jpeg",
      altText: "testPlank",
      total: 50,
    },
    {
      id: 6,
      questName: "Quest Name 6",
      gameTitle: "Game Title 6",
      imageUrl: "/testStrawberry.jpeg",
      altText: "testStrawberry",
      total: 60,
    },
  ];
  return (
    <div className="QuestPage">
      <Navbar />
      {testQuests.map((quest) => (
        <Quest quest={quest} key={quest.id} />
      ))}
    </div>
  );
}
