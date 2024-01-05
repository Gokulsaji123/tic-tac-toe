import React from "react";
import { useState } from "react";

export default function Player(props) {
  const [name, setName] = useState(props.name);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((prevValue) => !prevValue);
    if (isEditing) props.handlePlayerNameChange(props.symbol, name);
  }

  function handleInputChange(event) {
    const value = event.target.value;
    setName(value);
  }

  return (
    <li className={props.isActive ? "active" : null}>
      <span className="player">
        {isEditing ? (
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            required
          ></input>
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{props.symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
