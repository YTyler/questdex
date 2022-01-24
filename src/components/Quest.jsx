import React, { useState } from "react";

export default function Quest(props) {
  const quest = props.quest;
  const [open, setOpen] = useState(false);

  const openQuest = () => {
    setOpen((prevState) => !prevState);
  };

  const deleteQuest = () => {
    // Delete Quest from database
    console.log("Delete Quest");
    props.delete(quest);
  };

  const editQuest = () => {
    // I guess just edit the quest name
    console.log("Edit quest");
  }

  return (
    <div className="Quest" id={"quest" + quest.quest_id} onClick={openQuest}>
      {open && quest.imageUrl && (
        <img className="questImage" src={quest.imageUrl} alt={quest.altText} />
      )}
      <section>
        <h2>{quest.quest_name}</h2>
        {open && <h3>{quest.gameTitle}</h3>}
      </section>
      <section>
        {open && <h3>Items Needed:</h3>}
        {open && <h3>Notes</h3>}
      </section>
      <h3 className = "QuestEdit" onClick={editQuest}>Edit</h3>
      <h3 className = "QuestDelete" onClick={deleteQuest}>Delete</h3>
    </div>
  );
}
