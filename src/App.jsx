import './App.css';
import { useState, useEffect } from 'react';

/**
 * Componente principal del juego Pig Game
 * Un juego de dados para dos jugadores donde el objetivo es alcanzar exactamente 100 puntos
 */
function App() {
  // Estado para controlar el jugador activo (0 o 1)
  const [activePlayer, setActivePlayer] = useState(0);
  // Estado para almacenar las puntuaciones totales de ambos jugadores
  const [score, setScore] = useState([0, 0]);
  // Estado para la puntuación temporal del turno actual
  const [current, setCurrent] = useState(0);
  // Estado para el número actual del dado
  const [diceNumber, setDiceNumber] = useState(0);
  // Estado para los nombres de los jugadores
  const [playerNames, setPlayerNames] = useState(['', '']);
  // Estado para controlar si el juego ha comenzado
  const [gameStarted, setGameStarted] = useState(false);

  /**
   * Maneja el envío del formulario de nombres
   * Inicia el juego solo si ambos nombres están completos
   */
  const handleNameSubmit = (e) => {
    e.preventDefault();
    if (playerNames[0].trim() && playerNames[1].trim()) {
      setGameStarted(true);
    } else {
      alert('Por favor, introduce nombres para ambos jugadores');
    }
  };

  /**
   * Actualiza el nombre del jugador en el estado
   * @param {number} index - Índice del jugador (0 o 1)
   * @param {string} value - Nuevo nombre del jugador
   */
  const handleNameChange = (index, value) => {
    const newNames = [...playerNames];
    newNames[index] = value;
    setPlayerNames(newNames);
  };

  /**
   * Maneja la acción de mantener los puntos (HOLD)
   * Añade los puntos temporales a la puntuación total si no excede 100
   */
  const handleHold = () => {
    const newScore = [...score];
    const potentialScore = newScore[activePlayer] + current;

    if (potentialScore > 100) {
      // Si se pasa de 100, pierde el turno y los puntos actuales
      setActivePlayer(activePlayer === 0 ? 1 : 0);
      setCurrent(0);
      return;
    }

    // Actualizamos el valor del jugador activo
    newScore[activePlayer] = potentialScore;
    setScore(newScore);

    if (potentialScore === 100) {
      // El jugador ha ganado
      alert(`¡${playerNames[activePlayer]} ha ganado!`);
      handleNewGame();
      return;
    }

    // Cambiamos de jugador y reseteamos puntuación temporal
    setActivePlayer(activePlayer === 0 ? 1 : 0);
    setCurrent(0);
  };

  /**
   * Reinicia el juego a su estado inicial
   */
  const handleNewGame = () => {
    setActivePlayer(0);
    setScore([0, 0]);
    setCurrent(0);
    setDiceNumber(0);
    setGameStarted(false);
    setPlayerNames(['', '']);
  };

  /**
   * Genera un nuevo número aleatorio para el dado (1-6)
   */
  const handleRollDice = () => {
    setDiceNumber(Math.floor(Math.random() * 6) + 1);
  };

  /**
   * Efecto que se ejecuta cuando cambia el número del dado
   * Gestiona la lógica de puntuación y cambio de turno
   */
  useEffect(() => {
    if (diceNumber === 1) {
      setActivePlayer((prevActivePlayer) => (prevActivePlayer === 0 ? 1 : 0));
      setCurrent(0);
    } else {
      setCurrent((prevCurrent) => prevCurrent + diceNumber);
    }
  }, [diceNumber]);

  return (
    <main>
      {!gameStarted ? (
        <form onSubmit={handleNameSubmit} className="name-form">
          <div className="inputs-container">
            <div>
              <input
                type="text"
                placeholder="Nombre Jugador 1"
                value={playerNames[0]}
                onChange={(e) => handleNameChange(0, e.target.value)}
                className="name-input"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Nombre Jugador 2"
                value={playerNames[1]}
                onChange={(e) => handleNameChange(1, e.target.value)}
                className="name-input"
              />
            </div>
          </div>
          <button type="submit" className="btn">Empezar Juego</button>
        </form>
      ) : (
        <>
          {/* Player 1 */}
          <div className={`player ${activePlayer === 0 ? 'player--active' : ''}`}>
            <div className="name">{playerNames[0]}</div>
            <div className="score">{score[0]}</div>
            {activePlayer === 0 && (
              <div className="current">
                <div className="current-label">Current</div>
                <div className="current-score">{current}</div>
              </div>
            )}
          </div>

          {/* Player 2 */}
          <div className={`player ${activePlayer === 1 ? 'player--active' : ''}`}>
            <div className="name">{playerNames[1]}</div>
            <div className="score">{score[1]}</div>
            {activePlayer === 1 && (
              <div className="current">
                <div className="current-label">Current</div>
                <div className="current-score">{current}</div>
              </div>
            )}
          </div>
        </>
      )}

      {diceNumber > 0 && (
        <img
          src={`dice-${diceNumber}.png`}
          alt="Playing dice"
          className="dice"
        />
      )}
      <button className="btn btn--new" onClick={handleNewGame}>
        🔄 New game
      </button>
      <button className="btn btn--roll" onClick={handleRollDice}>
        🎲 Roll dice
      </button>
      <button className="btn btn--hold" onClick={handleHold}>
        📥 Hold
      </button>
    </main>
  );
}

export default App;
