import { useState } from 'react';
import { useGameState } from '../context/GameStateContext';

const CommanderTracker = () => {
  const { players, addPlayer, removePlayer } = useGameState();
  const [playerName, setPlayerName] = useState('');
  const [lifeTotal, setLifeTotal] = useState(40);

  const handleAddPlayer = () => {
    addPlayer(playerName);
    setPlayerName(''); // Clear input after adding
    setLifeTotal(40);
  };

  return (
    <div>
      <input
  type="text"
  value={playerName}
  onChange={(e) => setPlayerName(e.target.value)}
  placeholder="Enter player name"
/>
      <button onClick={handleAddPlayer}>Add Player</button>

      <div>
        {players.map((player, index) => (
          <div key={index}>
            <span>{player.name}: {player.life} life</span>
            <button onClick={() => handleLifeChange(player.name, 1)}>+1 Life</button>
            <button onClick={() => handleLifeChange(player.name, -1)}>-1 Life</button>
            <button onClick={() => removePlayer(player.name)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommanderTracker;
