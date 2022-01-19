import axios from "../../axiosConfig";

export async function getAllQuests() {
    try {
        const response = await axios.get('/quests');
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export async function postQuest(gameId, userId, questName) {
    try {
        await axios.post('/quests', {
            game_id: gameId, 
            user_id: userId, 
            quest_name: questName
        });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function updateQuest(questId, gameId, userId, questName) {
    try {
        await axios.put(`/quests/${questId}`, {
            quest_id: questId, 
            game_id: gameId, 
            user_id: userId, 
            quest_name: questName
        });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function deleteQuest(questId) {
    try {
        await axios.delete(`/quests/${questId}`);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}