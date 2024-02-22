import React from "react";
import Congrats from "./Jotto/components/Congrats/Congrats";
import GuessedWords from "./Jotto/components/GuessedWords/GuessedWords";
import "./App.css";
import Input from "./Jotto/components/Input/Input";
const App = () => {
  // TODO get props from shared state
  const success = false;
  const secretWord = "party";
  const guessedWords = [];
  return (
    <div data-test="component-app" className="mx-md">
      <div className="flex">
        <h1 className="heading mr">Jotto</h1>
        <i className="bi bi-cup-hot-fill md"></i>
      </div>
      <Congrats success={success} />
      <Input success={success} secretWord={secretWord} />
      <GuessedWords guessedWords={guessedWords} />
    </div>
  );
};

export default App;
