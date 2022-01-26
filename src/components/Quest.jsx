import React, { useState } from "react";

export default function Quest(props) {
    const quest = props.quest;
    const [open, setOpen] = useState(false);
    const [edit, setEdit] = useState(false);
    const [questName, setQuestName] = useState(quest.quest_name);
    const [validQuestName, setValidQuestName] = useState(false);

    const openQuest = () => {
        setOpen((prevState) => !prevState);
    };

    // Pass Quest up for deletion
    const deleteQuest = () => {
        props.delete(quest);
    };

    // Validation when editing the quest name
    const editQuestName = (input) => {
        setQuestName(input);
        if (input.trim().length > 0) {
            setValidQuestName(true);
        } else {
            setValidQuestName(false);
        }
    };

    // Pass Quest with new name for put request
    const submitEditedQuest = (event) => {
        event.preventDefault();
        if (validQuestName) {
            quest.quest_name = questName;
            props.edit(props.quest);
            setEdit(false);
        }
    };

    return (
        <div
            className="Quest"
            id={"quest" + quest.quest_id}
            onClick={openQuest}
        >
            {open && quest.imageUrl && (
                <img
                    className="questImage"
                    src={quest.imageUrl}
                    alt={quest.altText}
                />
            )}
            <section>
                {edit ? (
                    <form onSubmit={(event) => submitEditedQuest(event)}>
                        <input
                            type="text"
                            value={questName}
                            onChange={(elem) =>
                                editQuestName(elem.target.value)
                            }
                        />
                    </form>
                ) : (
                    <h2>{quest.quest_name}</h2>
                )}
                {/* {open && <h3>{quest.gameTitle}</h3>} */}
            </section>
            <section>
                {/* {open && <h3>Items Needed:</h3>} */}
                {/* {open && <h3>Notes</h3>} */}
            </section>
            <h3 className="QuestEdit" onClick={() => setEdit(true)}>
                Edit
            </h3>
            <h3 className="QuestDelete" onClick={deleteQuest}>
                Delete
            </h3>
        </div>
    );
}
