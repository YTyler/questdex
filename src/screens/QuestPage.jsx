import React, {useEffect, useState} from "react";
import Quest from "../components/Quest";
import axios from "../axios/axiosConfig";

export default function QuestPage() {  

  const [quests, setQuests] = useState([]);

  // Axios function for deleting a quest
  const deleteHandler = (quest) => {
    axios.delete(`/quests/${quest.quest_id}`);
  }

  const editHandler = (quest) => {
    try {
      axios.put(`/quests/${quest.quest_id}`, {
        quest_id: quest.quest_id, 
        game_id: quest.game_id, 
        user_id: quest.user_id, 
        quest_name: quest.quest_name
      });
    } catch (err) {
      console.log(err);
    }
  }
        
  // Axios function for getting all quests
  useEffect(() => {
    try {
      axios.get('/quests').then(res => setQuests(res.data));
    } catch (err) {
        console.log(err);
    }  
  }, [quests])
  
  return (
    <div className="QuestPage">
      <div className="AddQuest">
        <button>Add Quest</button>
      </div>
      {quests.map((quest) => (
        <Quest quest={quest} key={quest.quest_id} delete = {deleteHandler} edit = {editHandler} />
      ))}
    </div>
  );
}
