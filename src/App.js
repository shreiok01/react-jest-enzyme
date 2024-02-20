import React from "react";
import Congrats from "./Jotto/components/Congrats/Congrats";
import GuessedWords from "./Jotto/components/GuessedWords/GuessedWords";

const App = () => {
  return (
    <div data-test="component-app" className="container">
      {/* <Counter /> */}
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords
        guessedWords={[{ guessedWord: "train", letterMatchCount: 3 }]}
      />
    </div>
  );
};

export default App;
