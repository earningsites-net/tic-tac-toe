import React, { useState } from "react";
import Cell from "./Cell";

function Board() {
  const [turn, setTurn] = useState("Player 1");
  const [player1Moves, setPlayer1Moves] = useState([]);
  const [player2Moves, setPlayer2Moves] = useState([]);

  return (
    <div>
      <table>
        <tr>
          <Cell
            value="1"
            turn={turn}
            setTurn={setTurn}
            player1Moves={player1Moves}
            setPlayer1Moves={setPlayer1Moves}
            player2Moves={player2Moves}
            setPlayer2Moves={setPlayer2Moves}
          />
          <Cell
            value="2"
            turn={turn}
            setTurn={setTurn}
            player1Moves={player1Moves}
            setPlayer1Moves={setPlayer1Moves}
            player2Moves={player2Moves}
            setPlayer2Moves={setPlayer2Moves}
          />
          <Cell
            value="3"
            turn={turn}
            setTurn={setTurn}
            player1Moves={player1Moves}
            setPlayer1Moves={setPlayer1Moves}
            player2Moves={player2Moves}
            setPlayer2Moves={setPlayer2Moves}
          />
        </tr>
        <tr>
          <Cell
            value="4"
            turn={turn}
            setTurn={setTurn}
            player1Moves={player1Moves}
            setPlayer1Moves={setPlayer1Moves}
            player2Moves={player2Moves}
            setPlayer2Moves={setPlayer2Moves}
          />
          <Cell
            value="5"
            turn={turn}
            setTurn={setTurn}
            player1Moves={player1Moves}
            setPlayer1Moves={setPlayer1Moves}
            player2Moves={player2Moves}
            setPlayer2Moves={setPlayer2Moves}
          />
          <Cell
            value="6"
            turn={turn}
            setTurn={setTurn}
            player1Moves={player1Moves}
            setPlayer1Moves={setPlayer1Moves}
            player2Moves={player2Moves}
            setPlayer2Moves={setPlayer2Moves}
          />
        </tr>
        <tr>
          <Cell
            value="7"
            turn={turn}
            setTurn={setTurn}
            player1Moves={player1Moves}
            setPlayer1Moves={setPlayer1Moves}
            player2Moves={player2Moves}
            setPlayer2Moves={setPlayer2Moves}
          />
          <Cell
            value="8"
            turn={turn}
            setTurn={setTurn}
            player1Moves={player1Moves}
            setPlayer1Moves={setPlayer1Moves}
            player2Moves={player2Moves}
            setPlayer2Moves={setPlayer2Moves}
          />
          <Cell
            value="9"
            turn={turn}
            setTurn={setTurn}
            player1Moves={player1Moves}
            setPlayer1Moves={setPlayer1Moves}
            player2Moves={player2Moves}
            setPlayer2Moves={setPlayer2Moves}
          />
        </tr>
      </table>
      <p>Turn: {turn} </p>
    </div>
  );
}

export default Board;
