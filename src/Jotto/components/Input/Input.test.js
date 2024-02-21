import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";
import { checkProps, findByTestAttribute } from "../../../../tests/utils";

/**
 * Factory function to create Shallow Wrapper for the Input Component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = (success = false, secretWord = "party") => {
  return shallow(<Input success={success} secretWord={secretWord} />);
};

describe("renders", () => {
  describe("success is true", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(true);
    });
    test("render without errors", () => {
      const InputComponent = findByTestAttribute(wrapper, "component-input");
      expect(InputComponent.length).toBe(1);
    });
    test("input box does not show", () => {
      const InputBox = findByTestAttribute(wrapper, "input-box");
      expect(InputBox.exists()).toBe(false);
    });
    test("submit button does not show", () => {
      const submitButton = findByTestAttribute(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(false);
    });
  });

  describe("success is false", () => {
    let wrapper;
    beforeEach(() => {
      wrapper = setup(false);
    });

    test("render without errors", () => {
      const InputComponent = findByTestAttribute(wrapper, "component-input");
      expect(InputComponent.length).toBe(1);
    });

    test("input box shows", () => {
      const InputBox = findByTestAttribute(wrapper, "input-box");
      expect(InputBox.exists()).toBe(true);
    });

    test("submit button shows", () => {
      const submitButton = findByTestAttribute(wrapper, "submit-button");
      expect(submitButton.exists()).toBe(true);
    });
  });
});

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});

describe("state controlled input field", () => {
  let wrapper;
  let mockSetCurrentGuess = jest.fn();
  let originalUseState;

  beforeEach(() => {
    mockSetCurrentGuess.mockClear();
    originalUseState = React.useState;
    React.useState = () => ["", mockSetCurrentGuess];
    wrapper = setup();
  });

  afterEach(() => {
    React.useState = originalUseState;
  });

  test("state updates with value of input box", () => {
    const inputBox = findByTestAttribute(wrapper, "input-box");

    const mockEvent = { target: { value: "train" } };
    inputBox.simulate("change", mockEvent);

    expect(mockSetCurrentGuess).toHaveBeenCalledWith("train");
  });

  test("field is cleared upon submit button click", () => {
    const submitButton = findByTestAttribute(wrapper, "submit-button");

    submitButton.simulate("click", { preventDefault() {} });
    expect(mockSetCurrentGuess).toHaveBeenCalledWith("");
  });
});
