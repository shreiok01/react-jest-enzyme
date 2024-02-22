import React from "react";
import { shallow } from "enzyme";
import { findByTestAttribute, checkProps } from "../../../tests/utils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }],
};

/**
 * Factory function to create Shallow Wrapper for the GuessedWords Component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

test("does not throw warning with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if there are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });
  test("renders without error", () => {
    const component = findByTestAttribute(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });
  test("renders instructions to guess a word", () => {
    const instructions = findByTestAttribute(wrapper, "guess-instructions");
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if there are words guesses", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "agile", letterMatchCount: 1 },
    { guessedWord: "party", letterMatchCount: 5 },
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });
  test("renders without errors", () => {
    const component = findByTestAttribute(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders 'guessed words' section", () => {
    const guessedWordsNodes = findByTestAttribute(wrapper, "guessed-words");
    expect(guessedWordsNodes.length).toBe(1);
  });

  test("correct number of guessed words", () => {
    const guessedWordNodes = findByTestAttribute(wrapper, "guessed-word");
    expect(guessedWordNodes.length).toBe(guessedWords.length)
  });
});
