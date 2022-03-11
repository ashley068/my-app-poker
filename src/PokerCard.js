import React from "react";
import "./poker.css";

const PokerCard = (props) => {
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
      {/* <div>
        <img alt="" src="../public/poker-jack.png" />
      </div> */}
      <div className={`midPic ${props.type}`}>{props.suit}</div>
    </div>
    // <div>
    //   <img src="../public/poker-king.png" alt="" />
    // </div>
  );
};

export default PokerCard;

// ♣ &clubs;
// ♦ &diams;
// ♥ &hearts;
// ♠ &spades;
// https://codepen.io/gloriasoh/pen/OQExmP
