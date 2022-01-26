import React, { useState, useEffect } from "react";
import Item from "../components/Item";
import axios from "../axios/axiosConfig";

export default function ItemPage() {
    const [items, setItems] = useState([]);
    const [addItem, setAddItem] = useState(false);
    const [itemName, setItemName] = useState("");
    const [validItem, setValidItem] = useState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        try {
            axios.get("/items").then((res) => setItems(res.data));
        } catch (err) {
            console.log(err);
        }
    }, [isLoading]);

    const itemNameHandler = (input) => {
        setItemName(input);
        if (input.trim().length > 0) {
            setValidItem(true);
        } else {
            setValidItem(false);
        }
    };

    const addItemHandler = async () => {
        if (validItem) {
            try {
                //! User Id needs to be taken from a logged in user
                //! Will need to be updated
                await axios.post("/items", {
                    game_id: 1,
                    item_name: itemName,
                    quantity_needed: 0,
                });
            } catch (err) {
                console.log(err);
            } finally {
                setItemName("");
                setIsLoading((prev) => !prev);
            }
        }
    };

    // Axios function for deleting a quest
    const deleteHandler = async (item) => {
        await axios.delete(`/items/${item.item_id}`);
        setIsLoading((prev) => !prev);
    };

    // Axios function for editing a quest
    const editHandler = async (item) => {
        try {
            await axios.put(`/items/${item.item_id}`, {
                item_id: item.item_id,
                game_id: item.game_id,
                item_name: itemName,
                quantity_needed: item.quantity_needed,
            });
            setIsLoading((prev) => !prev);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="ItemPage">
            {addItem ? (
                <div className="AddForm">
                    <input
                        type="text"
                        value={itemName}
                        onChange={(elem) => itemNameHandler(elem.target.value)}
                        placeholder="Itemname..."
                    />
                    <div className="AddButtons">
                        <input type="submit" onClick={addItemHandler} />
                        <input
                            type="button"
                            value="Cancel"
                            onClick={() => setAddItem(false)}
                        />
                    </div>
                </div>
            ) : (
                <div className="Add">
                    <button onClick={() => setAddItem(true)}>Add Item</button>
                </div>
            )}
            {items.map((item) => (
                <Item
                    item={item}
                    key={item.id}
                    edit={editHandler}
                    delete={deleteHandler}
                />
            ))}
        </div>
    );
}
