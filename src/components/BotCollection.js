import React from "react";

const BotCollection = ({ bots, enlistBot }) => {
  const containerStyle = {
    maxWidth: "900px",
    margin: "50px auto",
    textAlign: "center",
    color: "#000080", 
    fontFamily: "Arial, sans-serif",
  };

  const botListStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    justifyContent: "center",
  };

  const botItemStyle = {
    width: "90%",
    padding: "20px",
    border: "3px solid #3498db", // Change border color to a blue shade
    borderRadius: "15px",
    boxSizing: "border-box",
    cursor: "pointer",
    transition: "transform 0.3s ease-in-out",
    backgroundColor: "#ADD8E6", // Change background color to a red shade
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
  };

  const h2Style = {
    color: "#f39c12", // Change h2 text color to an orange shade
    fontSize: "1.8em",
    margin: "10px 0",
  };

  const handleHover = (e) => {
    e.currentTarget.style.transform = "scale(1.03)";
  };

  const handleHoverOut = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: "#3498db" }}>My Awesome Bot Collection</h1>
      <div style={botListStyle}>
        {bots.map((bot) => (
          <div
            key={bot.id}
            style={botItemStyle}
            onClick={() => enlistBot(bot)}
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            <h2 style={h2Style}>{bot.name}</h2>
            <p>ID: {bot.id}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <p>Class: {bot.bot_class}</p>
            <p>Catchphrase: "{bot.catchphrase}"</p>
            <img
              src={bot.avatar_url}
              alt={`${bot.name} Avatar`}
              style={{
                maxWidth: "100%",
                borderRadius: "8px",
                marginTop: "15px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.4)",
              }}
            />
          </div>
        ))}
      </div>
      <h2><i>Built by Frank Mwaisaka</i></h2>
    </div>
    
  );
};

export default BotCollection;
