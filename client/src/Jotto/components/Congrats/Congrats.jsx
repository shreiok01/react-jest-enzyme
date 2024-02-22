import React from "react";
import PropTypes from "prop-types";
import './Congrats.css'

/**
 * Functional react component for congratulatory message.
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered component (or null if `success` prop is false).
 */
const Congrats = (props) => {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success msg">
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
        <i className="bi bi-x-circle cross"></i>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired,
};

export default Congrats;
