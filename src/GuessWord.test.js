import React from "react";
import { mount } from "enzyme";
import App from "./App";
import { findByTestAttribute } from "../tests/utils";

/**
 * Create wrapper with specified initial conditions,
 * then submit a guessed word of 'train'
 * @function
 *
 * @param {object} state - Initial conditions
 * @returns {wrapper} - Enzyme wrapper of mounted App component
 */

const setup = (state = {}) => {
  // TODO apply state
  const wrapper = mount(<App />);

  // Add a value of input box

  const InputBox = findByTestAttribute(wrapper, "input-box");
  InputBox.simulate("change", { target: { value: "train" } });

  // Simulate click on submit button
  const SubmitButton = findByTestAttribute(wrapper, "submit-button");
  SubmitButton.simulate("click", { preventDefault() {} });

  return wrapper;
};

describe("No words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWord: [],
    });
  });

  test("creates GuessedWords table with one row", () => {
    const guessedWordRow = findByTestAttribute(wrapper, "guessed-word");
    expect(guessedWordRow).toHaveLength(1);
  });
});

describe("Some words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWord: [{ guessedWord: "agile", letterMatchCount: 1 }],
    });
  });

  test("adds row to guessed word table", () => {
    const guessedWordNodes = findByTestAttribute(wrapper, "guessed-word");
    expect(guessedWordNodes).toHaveLength(2);
  });
});

describe("guess secret word", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({
      secretWord: "party",
      success: false,
      guessedWord: [{ guessedWord: "agile", letterMatchCount: 1 }],
    });
    const InputBox = findByTestAttribute(wrapper, "input-box");
    const mockEvt = { target: { value: "party" } };
    InputBox.simulate("change", mockEvt);

    const SubmitButton = findByTestAttribute("submit-button");
    SubmitButton.simulate("click", { preventDefault() {} });
  });

  test("adds row to guessed word table", () => {
    const guessedWordNodes = findByTestAttribute(wrapper, "guessed-word");
    expect(guessedWordNodes).toHaveLength(3);
  });

  test("display congrats component", () => {
    const congrats = findByTestAttribute(wrapper, "component-congrats");
    expect(congrats.text().length).toBeGreaterThan(0);
  });

  test("does not displays input component contents", () => {
    const InputComponentContents = findByTestAttribute("input-box");
    expect(InputComponentContents.exists()).toBe(false);

    const SubmitButton = findByTestAttribute(wrapper, "submit-button");
    expect(SubmitButton.exists()).toBe(false);
  });
});
