import React from "react";

export default function GameOver(props) {
  return (
    <div id="game-over">
      <h2>Game over</h2>
      {props.winner ? <p>{props.winner} won</p> : <p>It's a draw</p>}
      <button onClick={props.handleRestart}>Rematch</button>
    </div>
  );
}
