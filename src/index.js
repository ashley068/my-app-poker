import React from "react";
import ReactDOM from "react-dom";
import PokerCard from "./PokerCard";
import "./poker.css";

const App = () => {
  return (
    <div className="grid-container">
      <PokerCard suit="♥" rank="A" type="heart" />
      <PokerCard suit="♠" rank="5" type="spade" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
