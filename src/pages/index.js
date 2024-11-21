import { GameStateProvider } from '../context/GameStateContext';
import CommanderTracker from '../components/CommanderTracker';

export default function Home() {
  return (
    <GameStateProvider>
      <CommanderTracker />
    </GameStateProvider>
  );
}
