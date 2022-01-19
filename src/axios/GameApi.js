import axios from "../../axiosConfig";

export async function getAllGames() {
    try {
        const response = await axios.get('/game');
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export async function getGameById(game_id) {
    try {
        const response = await axios.get(`/game/${game_id}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export async function postGame(gameName) {
    const game = {game_name: gameName};
    try {
        await axios.post('/game', {
            game
        });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function updateGame(game_id, gameName) {
    const game = {game_id: game_id, game_name: gameName};
    try {
        await axios.put(`/game/${game_id}`, {
            game
        });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function deleteGame(game_id) {
    try {
        await axios.delete(`/game/${game_id}`);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}