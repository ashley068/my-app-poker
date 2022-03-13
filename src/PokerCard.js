import React from "react";
import "./poker.css";
import queen from "./img/poker-queen.png";
import jack from "./img/poker-jack.png";
import king from "./img/poker-king.png";

const rankStrValid = ["A", "J", "K", "Q"];
const suitImg = {
  J: jack,
  Q: queen,
  K: king,
};

const PokerCard = (props) => {
  const imageDisplay = (rank, type, suit) => {
    if (rankStrValid.includes(rank))
      return <img className="suit-avatar" src={suitImg[rank]} alt="" />;
    else return <div className={`midPic ${type}`}>{suit}</div>;
  };
  console.log(props.rank, typeof props.rank);
  return (
    <div className="grid-item">
      <div className={`top-left ${props.type}`}>
        {props.rank}
        <br />
        <div>{props.suit}</div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      {imageDisplay(props.rank, props.type, props.suit)}
      <div></div>
      <div></div>
      <div></div>
      <div className={`bottom-right ${props.type}`}>
        {props.rank}
        <br />
        <div>{props.suit}</div>
      </div>
    </div>
  );
};

export default PokerCard;

// ♣ &clubs;
// ♦ &diams;
// ♥ &hearts;
// ♠ &spades;
// https://codepen.io/gloriasoh/pen/OQExmP
