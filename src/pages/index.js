import React from "react";
import { GameStateProvider, useGameState } from "../context/GameStateContext";
import PlayerCard from "../components/PlayerCard";

const MainApp = () => {
  const { players } = useGameState();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Commander Tracker</h1>
      <div className="grid grid-cols-2 gap-4">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
    </div>
  );
};

const Home = () => (
  <GameStateProvider>
    <MainApp />
  </GameStateProvider>
);

export default Home;
