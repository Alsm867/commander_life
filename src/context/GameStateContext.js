import React, { createContext, useState, useContext } from "react";

const GameStateContext = createContext();

export const useGameState = () => useContext(GameStateContext);

export const GameStateProvider = ({ children }) => {
  const [players, setPlayers] = useState([
    { id: 1, name: "Player 1", life: 40, poison: 0, commanders: {} },
    { id: 2, name: "Player 2", life: 40, poison: 0, commanders: {} },
  ]);
  const [turn, setTurn] = useState(1);
  const [log, setLog] = useState([]);

  const updateLife = (id, amount) => {
    setPlayers((prev) =>
      prev.map((p) => (p.id === id ? { ...p, life: p.life + amount } : p))
    );
    setLog((prev) => [...prev, `Player ${id} life changed by ${amount}`]);
  };

  return (
    <GameStateContext.Provider
      value={{
        players,
        updateLife,
        turn,
        setTurn,
        log,
      }}
    >
      {children}
    </GameStateContext.Provider>
  );
};
