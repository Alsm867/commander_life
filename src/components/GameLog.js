const GameLog = () => {
    const { log } = useGameState();
    return (
      <div className="p-4 border rounded-lg shadow-md">
        <h3 className="font-bold">Game Log</h3>
        <ul>
          {log.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      </div>
    );
  };
  export default GameLog;
