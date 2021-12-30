import React, { useState } from "react";

export default function Quest(props) {
  const quest = props.quest;
  const [open, setOpen] = useState(false);

  const openQuest = () => {
    setOpen((prevState) => !prevState);
  };
  return (
    <div className="Quest" id={"quest" + quest.id} onClick={openQuest}>
      {open && quest.imageUrl && (
        <img className="questImage" src={quest.imageUrl} alt={quest.altText} />
      )}
      <section>
        <h2>{quest.questName}</h2>
        {open && <h3>{quest.gameTitle}</h3>}
      </section>
      <section>
        {open && <h3>Items Needed:</h3>}
        {open && <h3>Notes</h3>}
      </section>
    </div>
  );
}
