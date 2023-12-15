import { useState } from "react";
import { TURNS } from "./constants";
import { checkWinnerFrom, checkEndGameFrom } from "./logic";

import confetti from "canvas-confetti";
import Square from "./components/Square";
import WinnerModal from "./components/WinnerModal";

import "./App.css";

function App() {
  // Board
  const [board, setBoard] = useState(() => {
    // Obtener el tablero del local storage
    const boardFromLocalStorage = window.localStorage.getItem("board");

    // Si hay tablero en el local storage, devolver el tablero parseado, sino devolver un array de 9 elementos vacíos
    return boardFromLocalStorage ? JSON.parse(boardFromLocalStorage) : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    // Obtener el turno del local storage
    const turnFromLocalStorage = window.localStorage.getItem("turn");

    // Si hay turno en el local storage, devolver el turno parseado, sino devolver X
    return turnFromLocalStorage ? JSON.parse(turnFromLocalStorage) : TURNS.X;
  });

  const [winner, setWinner] = useState(null); // null es que no hay ganador, false es que hay empate

  const updateBoard = (index) => {
    /* ESTO ESTA MAL
    board[index] = turn;
    setBoard(board);

    Los estados son inmutables, no se pueden modificar directamente.
    Si se modifica el estado directamente, React no se entera y no actualiza la interfaz.
    Por eso, se debe crear una copia del estado, modificar la copia y luego actualizar el estado.

    */

    // Si la casilla ya está ocupada o si ya hay ganador, no hacer nada
    if (board[index] || winner) return;

    // Copiar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Actualizar el turno
    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Guardar la partida en el local storage
    // NOTA: El local storage solo guarda strings, por eso se usa JSON.stringify
    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", JSON.stringify(newTurn));

    // Comprobar si hay ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      // Si hay ganador, mostrar confetti
      confetti();
      setWinner(newWinner);
    } else if (checkEndGameFrom(newBoard)) {
      setWinner(false); // False = Empate
    }
  };

  // Resetear el juego (setear los estados iniciales)
  const resetGame = () => {
    // Reiniciar el tablero
    setBoard(Array(9).fill(null));

    // Reiniciar el turno
    setTurn(TURNS.X);

    // Reiniciar el ganador
    setWinner(null);

    // Borrar la partida del local storage
    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset del juego</button>
      <section className="game">
        {board.map((_, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {board[index]}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame} />
    </main>
  );
}

export default App;
