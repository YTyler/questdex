import React, { useState } from "react";

export default function Item(props) {
  const item = props.item;
  const [open, setOpen] = useState(false);
  return (
    <div className="Item">
      <section>
        {item.imageURL && open && (
          <img src={item.imageURL} alt={item.altText} />
        )}
        <h2>{item.itemName}</h2>
        <h3>{item.gameTitle}</h3>
      </section>
      <section>
        <h3>Number Needed: {item.total}</h3>
        <h3>Related Quests:</h3>
        <h3>Notes</h3>
      </section>
    </div>
  );
}
