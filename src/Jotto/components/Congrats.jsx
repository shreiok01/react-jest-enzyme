import React from "react";
/**
 * Functional react component for congrats message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered Component (or null if `success` prop is false)
 */

export default (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the word
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
