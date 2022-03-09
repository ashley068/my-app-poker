import React from "react";
import PokerCard from "./PokerCard";
import "./poker.css";
import SearchBar from "./SearchBar";

const rankStrValid = ["A", "J", "K", "Q"];
const allSuit = {
  clubs: "♣",
  diams: "♦",
  hearts: "♥",
  spades: "♠",
};
class App extends React.Component {
  state = { rank: "", suit: "", type: "" };
  rankValidation = (rank) => {
    if ((rank >= 1 && rank <= 10) || rankStrValid.includes(rank)) {
      return true;
    } else return false;
  };

  onSearchSubmit = (inputRank, inputSuit) => {
    if (this.rankValidation(inputRank)) {
      inputSuit === "hearts" || inputSuit === "diams"
        ? this.setState({ type: "suit-red" })
        : this.setState({ type: "suit-black" });
      this.setState({ rank: inputRank, suit: allSuit[inputSuit] });
    } else {
      alert("Invalid Input! Try again");
    }
  };
  render() {
    return (
      <div>
        <div className="ui container">
          <SearchBar onSubmit={this.onSearchSubmit} />
        </div>
        <div className="grid-container">
          <PokerCard
            suit={this.state.suit}
            rank={this.state.rank}
            type={this.state.type}
          />
        </div>
      </div>
    );
  }
}

export default App;
