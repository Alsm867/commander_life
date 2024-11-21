const TurnTracker = () => {
    const { turn, setTurn } = useGameState();
    return (
      <div className="p-4 border rounded-lg shadow-md">
        <h3 className="font-bold">Turn: {turn}</h3>
        <button
          className="px-2 py-1 bg-blue-500 text-white rounded"
          onClick={() => setTurn(turn + 1)}
        >
          Next Turn
        </button>
      </div>
    );
  };
  export default TurnTracker;
