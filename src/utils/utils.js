export const validateLifeTotal = (life) => {
    return Math.max(0, Math.min(life, 999));
  };
  export const updateCommanderDamage = (damageLog, attackerId, defenderId, damage) => {
    const updatedLog = { ...damageLog };
    if (!updatedLog[attackerId]) updatedLog[attackerId] = {};
    updatedLog[attackerId][defenderId] = (updatedLog[attackerId][defenderId] || 0) + damage;
    return updatedLog;
  };

  export const getCommanderDamage = (damageLog, attackerId, defenderId) => {
    return (damageLog[attackerId]?.[defenderId] || 0);
  };
  export const pickRandomPlayer = (players) => {
    const randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex];
  };
  export const formatTurnNumber = (turn) => {
    const suffix = ["th", "st", "nd", "rd"];
    const v = turn % 100;
    return turn + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
  };
  export const createLogEntry = (playerName, action, details) => {
    const timestamp = new Date().toLocaleTimeString();
    return `[${timestamp}] ${playerName} ${action} ${details}`;
  };
  export const validatePoisonCounters = (poison) => {
    return Math.min(poison, 10);
  };
  export const sortPlayersByLife = (players) => {
    return [...players].sort((a, b) => b.life - a.life);
  };
