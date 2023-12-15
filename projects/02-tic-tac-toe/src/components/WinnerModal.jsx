import Square from "./Square";
import PropTypes from "prop-types";

function WinnerModal({ winner, resetGame }) {
  // Si el ganador es null, no mostrar nada
  if (winner === null) return null;

  const winnerText = winner == false ? "Empate" : "Ganador"

  return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        <header className="win">{winner && <Square>{winner}</Square>}</header>
        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  );
}

WinnerModal.propTypes = {
  winner: PropTypes.bool,
  resetGame: PropTypes.func.isRequired,
};

export default WinnerModal;