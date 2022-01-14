import axios from "../../axiosConfig";

export async function getAllItems() {
    try {
        const response = await axios.get('/items');
        return response.data;
    } catch (err) {
        console.log(err);
    }
}

export async function postItem(gameId, itemName, quantity, notes, img) {
    const item = {game_id: gameId, item_name: itemName, quantity_needed: quantity, item_notes: notes, item_img: img};
    try {
        await axios.post('/items', {
            item
        });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }    
}

export async function updateItem(itemId, gameId, itemName, quantity, notes, img) {
    const item = {item_id: itemId, game_id: gameId, item_name: itemName, quantity_needed: quantity, item_notes: notes, item_img: img};
    try {
        await axios.put(`/items/${itemId}`, {
            item
        });
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}

export async function deleteItem(itemId) {
    try {
        await axios.delete(`/items/${itemId}`);
        return true;
    } catch (err) {
        console.log(err);
        return false;
    }
}