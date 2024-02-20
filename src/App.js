import React from "react";
import Jotto from "./Jotto/Jotto";
import Congrats from "./Jotto/components/Congrats/Congrats";
import GuessedWords from "./Jotto/components/GuessedWords/GuessedWords";
import "./App.css";
const App = () => {
  return (
    <div data-test="component-app" className="mx-md">
      {/* <Counter /> */}
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
};

export default App;
