import React, { useState } from "react";
import { shuffle } from "lodash";

import "./Squares.css";
import COLORS from "./colors";
import Square from "./Square";

const Squares = ({ colors }) => {
  const [colorsList, updateColorsList] = useState(colors);

  return (
    <section className="squares">
      <h2 className="squares__heading">Squares</h2>
      <div className="squares__content">
        <button className="squares-content__button" onClick={handleBtnClick}>
          Shuffle Items
        </button>
        {colorsList.map(color => (
          <Square key={color} color={color} />
        ))}
      </div>
    </section>
  );

  function handleBtnClick() {
    shuffleColors();
  }

  function shuffleColors() {
    updateColorsList(shuffle(colorsList));
  }
};

Squares.defaultProps = {
  colors: COLORS
};

export default Squares;
