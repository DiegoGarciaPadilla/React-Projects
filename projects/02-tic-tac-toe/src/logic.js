import { TURNS, WINNING_COMBINATIONS } from "./constants.js";
import confetti from "canvas-confetti";

export const checkWinnerFrom = (boardToCheck) => {
    for (const combination of WINNING_COMBINATIONS) {
        const [a, b, c] = combination;
        if (
            boardToCheck[a] && // Si la casilla no está vacía -->  boardToCheck[a] != null
            boardToCheck[a] == boardToCheck[b] && // Si las casillas son iguales --> boardToCheck[a] == boardToCheck[b]
            boardToCheck[a] == boardToCheck[c] // Si las casillas son iguales --> boardToCheck[a] == boardToCheck[c]
        ) {
            return boardToCheck[a]; // Devolver el valor de la casilla (X o O)
        }
    }

    // Si no se encontró ganador, devolver null
    return null;
};

export const checkEndGameFrom = (boardToCheck) => {
    // Si todas las casillas (square) están ocupadas (no son null), devolver true
    return boardToCheck.every((square) => square != null);
};