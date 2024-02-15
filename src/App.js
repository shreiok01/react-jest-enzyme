import React from "react";
// import Counter from "./Counter/Counter";
import Jotto from "./Jotto/Jotto";

const App = () => {
  return (
    <div data-test="component-app" className="jotto">
      {/* <Counter /> */}
      <Jotto />
    </div>
  );
};

export default App
