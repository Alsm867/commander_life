import React from "react";
import { useGameState } from "../context/GameStateContext";

const PlayerCard = ({ player }) => {
  const { updateLife } = useGameState();

  return (
    <div className="p-4 border rounded-lg shadow-md">
      <h2 className="text-lg font-bold">{player.name}</h2>
      <p>Life: {player.life}</p>
      <p>Poison: {player.poison}</p>
      <div className="flex gap-2">
        <button
          className="px-2 py-1 bg-green-500 text-white rounded"
          onClick={() => updateLife(player.id, 1)}
        >
          +1
        </button>
        <button
          className="px-2 py-1 bg-red-500 text-white rounded"
          onClick={() => updateLife(player.id, -1)}
        >
          -1
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
