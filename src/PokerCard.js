import React from "react";
import "./poker.css";

const PokerCard = (props) => {
  return (
    <div className="grid-item">
      <div className="top-left">
        {props.rank}
        <br />
        <div>{props.suit}</div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div className={props.type}>{props.suit}</div>
    </div>
  );
};

export default PokerCard;

// ♣ &clubs;
// ♦ &diams;
// ♥ &hearts;
// ♠ &spades;
// https://codepen.io/gloriasoh/pen/OQExmP
