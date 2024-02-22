import React from "react";
import PropTypes from "prop-types";
import './Input.css'

const Input = ({ success, secretWord }) => {
  const [currentGuess, setCurrentGuess] = React.useState("");

  if (success) {
    return <div data-test="component-input"/>
  }
  return (
    <div data-test="component-input">
      <form action="" className="card">
        <input
          type="text"
          data-test="input-box"
          className="mb-2 mx-sm-3 input-field"
          placeholder="enter your guess"
          value={currentGuess}
          onChange={(event) => setCurrentGuess(event.target.value)}
        />
        <button
          onClick={(evt) => {
            evt.preventDefault();
            // TODO update guessedWords global state
            // TODO check against secretWord and optionally update "success" global state
            setCurrentGuess("");
          }}
          data-test="submit-button"
          className="btn"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired,
};

export default Input;
