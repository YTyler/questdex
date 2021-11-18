import React, { useState } from "react";

export default function Item(props) {
  const item = props.item;
  const [open, setOpen] = useState(false);

const openItem = () => {
    setOpen((prevState)=> !prevState);
  }

  return (
    <div className="Item">
      <section>
        {item.imageURL && open && (
          <img src={item.imageURL} alt={item.altText} />
        )}
        <h2>{item.itemName}</h2>
        {open && <h3>{item.gameTitle}</h3>}
      </section>
      <section>
        <h2>Number Needed: {item.total}</h2>
        {open && <h3>Related Quests:</h3>}
        {open && <h3>Notes</h3>}
      </section>
      <button onClick={openItem} ></button>
    </div>
  );
}
