import React, { useState } from "react";

function Cell(props) {
  const [symbol, setSymbol] = useState("");
  const [enabled, setEnabled] = useState(true);

  function checkWinner() {
    console.log(props.player1Moves);
    console.log(props.player2Moves);
    if (
      props.player1Moves.includes("1") &&
      props.player1Moves.includes("2") &&
      props.player1Moves.includes("3")
    ) {
      props.setTurn("Player 1 Wins");
    }
    if (
      props.player1Moves.includes("4") &&
      props.player1Moves.includes("5") &&
      props.player1Moves.includes("6")
    ) {
      props.setTurn("Player 1 Wins");
    }
    if (
      props.player1Moves.includes("7") &&
      props.player1Moves.includes("8") &&
      props.player1Moves.includes("9")
    ) {
      props.setTurn("Player 1 Wins");
    }
    if (
      props.player1Moves.includes("1") &&
      props.player1Moves.includes("4") &&
      props.player1Moves.includes("7")
    ) {
      props.setTurn("Player 1 Wins");
    }
    if (
      props.player1Moves.includes("2") &&
      props.player1Moves.includes("5") &&
      props.player1Moves.includes("8")
    ) {
      props.setTurn("Player 1 Wins");
    }
    if (
      props.player1Moves.includes("3") &&
      props.player1Moves.includes("6") &&
      props.player1Moves.includes("9")
    ) {
      props.setTurn("Player 1 Wins");
    }
    if (
      props.player1Moves.includes("1") &&
      props.player1Moves.includes("5") &&
      props.player1Moves.includes("9")
    ) {
      props.setTurn("Player 1 Wins");
    }
    if (
      props.player1Moves.includes("3") &&
      props.player1Moves.includes("5") &&
      props.player1Moves.includes("7")
    ) {
      props.setTurn("Player 1 Wins");
    }

    if (
      props.player2Moves.includes("1") &&
      props.player2Moves.includes("2") &&
      props.player2Moves.includes("3")
    ) {
      props.setTurn("Player 2 Wins");
    }
    if (
      props.player2Moves.includes("4") &&
      props.player2Moves.includes("5") &&
      props.player2Moves.includes("6")
    ) {
      props.setTurn("Player 2 Wins");
    }
    if (
      props.player2Moves.includes("7") &&
      props.player2Moves.includes("8") &&
      props.player2Moves.includes("9")
    ) {
      props.setTurn("Player 2 Wins");
    }
    if (
      props.player2Moves.includes("1") &&
      props.player2Moves.includes("4") &&
      props.player2Moves.includes("7")
    ) {
      props.setTurn("Player 2 Wins");
    }
    if (
      props.player2Moves.includes("2") &&
      props.player2Moves.includes("5") &&
      props.player2Moves.includes("8")
    ) {
      props.setTurn("Player 2 Wins");
    }
    if (
      props.player2Moves.includes("3") &&
      props.player2Moves.includes("6") &&
      props.player2Moves.includes("9")
    ) {
      props.setTurn("Player 2 Wins");
    }
    if (
      props.player2Moves.includes("1") &&
      props.player2Moves.includes("5") &&
      props.player2Moves.includes("9")
    ) {
      props.setTurn("Player 2 Wins");
    }
    if (
      props.player2Moves.includes("3") &&
      props.player2Moves.includes("5") &&
      props.player2Moves.includes("7")
    ) {
      props.setTurn("Player 2 Wins");
    }
  }

  function handleClick() {
    if (
      enabled &&
      props.turn != "Player 1 Wins" &&
      props.turn != "Player 2 Wins"
    ) {
      var move = props.value;
      if (props.turn === "Player 1") {
        setSymbol("X");
        props.setTurn("Player 2");
        props.setPlayer1Moves((prev) => {
          return [...prev, move];
        });
      } else {
        setSymbol("O");
        props.setTurn("Player 1");
        props.setPlayer2Moves((prev) => {
          return [...prev, move];
        });
      }
      setEnabled(false);
    }
  }
  checkWinner();
  return <td onClick={handleClick}>{symbol}</td>;
}

export default Cell;
