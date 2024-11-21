import { useState } from 'react';
import { useGameState } from '../context/GameStateContext';

const CommanderTracker = () => {
  const { players, addPlayer, removePlayer } = useGameState();
  const [playerName, setPlayerName] = useState('');

  return (
    <div>
      <input
        type="text"
        value={playerName}
        onChange={(e) => setPlayerName(e.target.value)}
        placeholder="Enter player name"
      />
      <button onClick={() => addPlayer(playerName)}>Add Player</button>

      <div>
        {players.map((player) => (
          <div key={player.id}>
            <span>{player.name}</span>
            <button onClick={() => removePlayer(player.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommanderTracker;
