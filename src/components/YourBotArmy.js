import React from "react";

function YourBotArmy({ enlistedBots, removeFromArmy, releaseBot }) {


  // Handle releasing of bots
  const handleRelease = (botId) => {
   
    if (releaseBot) {
      releaseBot(botId);
    } else if (removeFromArmy) {
      removeFromArmy(botId);
    }
  };

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          <h3 style={{color : "black"}}>Your Selected Bot Army</h3>
          {enlistedBots.map((bot) => (
            <div key={bot.id} className="ui card">
              <div className="image" onClick={() => removeFromArmy(bot.id)}>
                {/* Clicking the image removes the bot from the army */}

                <img src={bot.avatar_url} alt={`${bot.name} Avatar`} />
              </div>
              <div className="content">
                <div className="header">{bot.name}</div>
                <div className="meta">
                  <span className="category">{bot.bot_class}</span>
                </div>
                <div className="description">
                  <p>ID: {bot.id}</p>
                  <p>Health: {bot.health}</p>
                  <p>Damage: {bot.damage}</p>
                  <p>Armor: {bot.armor}</p>
                  <p>Catchphrase: {bot.catchphrase}</p>
                </div>
              </div>

              {/* Clicking on delete button deletes the bot from the army */}
              {releaseBot && (
                <button
                  className="ui red button"
                  onClick={() => handleRelease(bot.id)}
                >
                  Delete Bot 
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;