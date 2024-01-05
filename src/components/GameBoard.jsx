import React from "react";



export default function GameBoard(props) {
  
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray])
  //     ];
  //     updatedBoard[rowIndex][colIndex] = props.activePlayer;
  //     return updatedBoard;

  //   });
  //   props.updatePlayer();
  // }
  return (
    <ol id="game-board">
      {props.gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => props.updatePlayer(rowIndex,colIndex)} disabled={playerSymbol !== null}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
