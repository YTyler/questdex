import React, { useEffect, useState } from "react";
import Quest from "../components/Quest";
import axios from "../axios/axiosConfig";

export default function QuestPage() {
    const [quests, setQuests] = useState([]);
    const [addQuest, setAddQuest] = useState(false);
    const [questName, setQuestName] = useState("");
    const [validQuestName, setValidQuestName] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Setting quest name when adding a quest
    const questNameHandler = (input) => {
        setQuestName(input);
        if (input.trim().length > 0) {
            setValidQuestName(true);
        } else {
            setValidQuestName(false);
        }
    };

    // Axios function for adding a quest and resets the input field to an empty string
    const addQuestHandler = async () => {
        if (validQuestName) {
            try {
                //! User Id needs to be taken from a logged in user
                //! Will need to be updated
                await axios.post("/quests", {
                    game_id: 1,
                    user_id: 1,
                    quest_name: questName,
                });
                setQuestName("");
                setIsLoading((prev) => !prev);
            } catch (err) {
                console.log(err);
            }
        }
    };

    // Axios function for deleting a quest
    const deleteHandler = async (quest) => {
        await axios.delete(`/quests/${quest.quest_id}`);
        setIsLoading((prev) => !prev);
    };

    // Axios function for editing a quest
    const editHandler = async (quest) => {
        try {
            await axios.put(`/quests/${quest.quest_id}`, {
                quest_id: quest.quest_id,
                game_id: quest.game_id,
                user_id: quest.user_id,
                quest_name: quest.quest_name,
            });
            setIsLoading((prev) => !prev);
        } catch (err) {
            console.log(err);
        }
    };

    // Axios function for getting all quests
    useEffect(() => {
        try {
            axios.get("/quests").then((res) => setQuests(res.data));
        } catch (err) {
            console.log(err);
        }
    }, [isLoading]);

    return (
        <div className="QuestPage">
            {addQuest ? (
                <div>
                    <input
                        type="text"
                        value={questName}
                        onChange={(elem) => questNameHandler(elem.target.value)}
                        placeholder="Questname..."
                    />
                    <input type="submit" onClick={addQuestHandler} />
                    <input
                        type="button"
                        value="Cancel"
                        onClick={() => setAddQuest(false)}
                    />
                </div>
            ) : (
                <div className="Add">
                    <button onClick={() => setAddQuest(true)}>Add Quest</button>
                </div>
            )}
            {quests.map((quest) => (
                <Quest
                    quest={quest}
                    key={quest.quest_id}
                    delete={deleteHandler}
                    edit={editHandler}
                />
            ))}
        </div>
    );
}
