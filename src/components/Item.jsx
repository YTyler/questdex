import React, { useState } from "react";

export default function Item(props) {
    const item = props.item;
    const [open, setOpen] = useState(false);
    const [openEdit, setOpenEdit] = useState(false);
    const [itemName, setItemName] = useState(item.item_name);
    const [validName, setValidName] = useState(false);

    const openItem = () => {
        setOpen((prevState) => !prevState);
    };

    const editItemName = (input) => {
        setItemName(input);
        if (input.trim().length > 0) {
            setValidName(true);
        } else {
            setValidName(false);
        }
    };

    const submitEdit = (event) => {
        event.preventDefault();
        if (validName) {
            item.item_name = itemName;
            props.edit(props.item);
            setOpenEdit(false);
        }
    };

    return (
        <div className="Item" id={"item" + item.id} onClick={openItem}>
            {open && item.imageUrl && (
                <img
                    className="itemImage"
                    src={item.imageUrl}
                    alt={item.altText}
                />
            )}
            <section>
                {openEdit ? (
                    <form onSubmit={(event) => submitEdit(event)}>
                        <input
                            type="text"
                            value={itemName}
                            onChange={(elem) => editItemName(elem.target.value)}
                        />
                    </form>
                ) : (
                    <h2>{item.item_name}</h2>
                )}
                {open && <h3>{item.gameTitle}</h3>}
            </section>
            <section>
                <h2>Number Needed: {item.total}</h2>
                {open && <h3>Related Quests:</h3>}
                {open && <h3>Notes</h3>}
            </section>
            <h3 className="QuestEdit" onClick={() => setOpenEdit(true)}>
                Edit
            </h3>
            <h3 className="QuestDelete" onClick={() => props.delete(item)}>
                Delete
            </h3>
        </div>
    );
}
