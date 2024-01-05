import React from 'react'

export default function Log(props) {
  return (
    <ol id="log">
      {props.gameTurns.map((turn,i) => (
        <li key={i}>{turn.player} selected {turn.square.row},{turn.square.col}</li>
      ))}
    </ol>
  )
}
