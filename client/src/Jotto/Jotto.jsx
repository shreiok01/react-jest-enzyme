import React from "react";
import "./Jotto.css";

const Jotto = () => {
  return (
    <div className="design" data-test="component-jotto">
      <h2 className="center">Jotto</h2>
      <div className="card">
          <input
            className="input-field"
            type="text"
            placeholder="Guess the word..."
          />
          <button className="btn" >Guess</button>
      </div>
    </div>
  );
};

export default Jotto;
