import { createContext, useState, useContext } from 'react';

const GameStateContext = createContext();

export const GameStateProvider = ({ children }) => {
  const [players, setPlayers] = useState([]);
  const [playerName, setPlayerName] = useState(''); // Add this state

  const addPlayer = (playerName) => {
    setPlayers(prevPlayers => [...prevPlayers, { name: playerName, life: 40 }]);
  };

  const removePlayer = (playerName) => setPlayers(players.filter(p => p.name !== playerName));
  const adjustLife = (player, amount) => {
    const updatedPlayers = players.map(p =>
      p.name === player.name ? { ...p, life: p.life + amount } : p
    );
    setPlayers(updatedPlayers);
  };

  return (
    <GameStateContext.Provider value={{ players, addPlayer, removePlayer, adjustLife }}>
      {children}
    </GameStateContext.Provider>
  );
};


export const useGameState = () => useContext(GameStateContext);
