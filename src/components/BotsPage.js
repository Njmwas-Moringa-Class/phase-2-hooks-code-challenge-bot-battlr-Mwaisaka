import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  // State for all available bots
  const [bots, setBots] = useState([]);

  //State for bots in my army
  const [enlistedBots, setEnlistedBots] = useState([]);


  // Fetches bots from API
  useEffect(() => {
    fetch("http://localhost:8002/bots")
      .then((response) => response.json())
      .then((bots) => {
        setBots(bots);
      });
  }, []);

  // Enlists bots in army
  const enlistBot = (bot) => {
    
    // checking if bot is already enlisted
    if (!enlistedBots.some((enlistedBot) => enlistedBot.id === bot.id)) {

      // Add a bot
      setEnlistedBots((prevEnlistedBots) => [
        ...prevEnlistedBots,
        {
          id: bot.id,
          name: bot.name,
          health: bot.health,
          damage: bot.damage,
          armor: bot.armor,
          bot_class: bot.bot_class,
          catchphrase: bot.catchphrase,
          avatar_url: bot.avatar_url,
        },
      ]);
    }
  };


  //Remove bot from army
  const removeFromArmy = (botId) => {

    //Filters bots
    setEnlistedBots((prevEnlistedBots) =>
      prevEnlistedBots.filter((bot) => bot.id !== botId)
    );
  };

  const releaseBot = (botId) => {
    // This deletes the bot from the API backend
    fetch(`http://localhost:8002/bots/${botId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete bot from the backend");
        }
      })
    
      // .catch((error) => {
      //   console.error(error);
      // });

    // Release the bot from the army
    removeFromArmy(botId);
  };


  // BotsPage format
  return (
    
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center" }}>
      <h1>Bot Army</h1>
      <YourBotArmy
        enlistedBots={enlistedBots}
        removeFromArmy={removeFromArmy}
        releaseBot={releaseBot}
      />
      <BotCollection bots={bots} enlistBot={enlistBot} />
      <p style={{ marginTop: "20px", fontStyle: "italic" }}>
      </p>
      </div>
  );
}

export default BotsPage;