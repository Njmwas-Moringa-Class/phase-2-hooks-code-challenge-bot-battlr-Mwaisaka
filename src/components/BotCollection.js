import React from "react";
import BotCard from "../components/BotCard";

function BotCollection({ botCollection, action, removeCard }) {
  // Your code here
  const displayBotCards = botCollection.map((bot) => {
    return <BotCard bot={bot} action={action} removeCard={removeCard} />;
  });
  return (
    <div className="ui four column grid">
      <div className="row">
        {displayBotCards}
        Collection of all bots
      </div>
    </div>
  );
}

export default BotCollection;
