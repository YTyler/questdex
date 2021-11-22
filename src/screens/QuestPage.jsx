import React from "react";
import Quest from "../components/Item";
import Navbar from "../components/Navbar";

export default function QuestPage() {
  const testQuests = [];
  return (
    <div className="QuestPage">
      <Navbar />
      {testQuests.map((testQuest) => (
        <Quest quest={testQuest} key={testQuest.id} />
      ))}
    </div>
  );
}
