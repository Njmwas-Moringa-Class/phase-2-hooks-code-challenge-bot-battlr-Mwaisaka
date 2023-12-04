import React from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

function BotsPage({
  filteredCollection,
  botArmy,
  botSpecs,
  collectionVisible,
}) {
  //start here with your code for step one

  const state = {
    botCollection: [],
    filteredCollection: [],
    botArmy: [],
    collectionVisible: true,
    botSpecs: {},
  }

  function componentDidMount() {
    fetch(" http://localhost:8002/bots")
      .then((response) => response.json())
      .then((bots) =>
        this.setState({ botCollection: bots, filteredCollection: bots })
      )
      .then(console.log("Bots loaded"));
  }

  const addToArmy = (bot) => {
    const newCollection = this.state.filteredCollection.filter(
      (card) => card.bot_class !== bot.bot_class
    );
    this.setState({
      filtereCollection: newCollection,
      botArmy: [...this.state.botArmy, bot],
      collectionVisible: true,
    });
  };
  const removeFromArmy = (bot) => {
    const newArmy = this.state.botArmy.filter((card) => card.id !== bot.id);
    const armyClasses = newArmy.map((bot) => bot.bot_class);
    const newCollection = this.state.botCollection.filter((bot) => {
      console.log("Filter: ", !armyClasses.include(bot.bot_class));
      return !armyClasses.include(bot.bot_class);
    });
    console.log("newCollection: ", newCollection);

    this.setState({ botArmy: newArmy, filteredCollection: newCollection });
  };

  const removeBotPermanently = (bot) => {
    let newCollection = this.state.botCollection.filter((card) => card !== bot);
    let newFilteredCollection = this.state.filteredCollection.filter(
      (card) => card !== bot
    );
    let newArmy = this.state.botArmy.filter((card) => card !== bot);

    this.setState({
      botCollection: newCollection,
      filteredCollection: newFilteredCollection,
      botArmy: newArmy,
    });
    fetch(`http://localhost:8002/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json)
      .then((result) => console.log(result));
  };

  const displayBotsSpecs = (bot) => {
    this.setState({ collectionVisible: false, botSpecs: bot });
  };

  const displayBotCollections = () => {
    this.setState({ collectionVisible: true });
  };

  return (
    <div>
      <YourBotArmy
        bots={botArmy}
        action={this.removeFromArmy}
        removeCard={this.removeBotPermanently}
      />
      {collectionVisible ? (
        <BotCollection
          botCollection={filteredCollection}
          action={this.displayBotSpecs}
          removeCard={this.removeBotPermanently}
        />
      ) : (
        <BotSpecs
          bot={botSpecs}
          back={this.displayBotCollection}
          enlist={this.addToArmy}
        />
      )}
    </div>
  );
}

// function BotsPage() {
//   //start here with your code for step one

//   return (
//     <div>
//       <YourBotArmy />
//       <BotCollection />
//     </div>
//   )
// }

export default BotsPage;
