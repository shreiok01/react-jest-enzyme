import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";
import { checkProps, findByTestAttribute } from "../../../../tests/utils";

/**
 * Factory function to create Shallow Wrapper for the Input Component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = (secretWord = "party" ) => {
  return shallow(<Input secretWord={secretWord} />);
};


test("render without errors", () => {
  const wrapper = setup();
  const InputComponent = findByTestAttribute(wrapper, "component-input");
  expect(InputComponent.length).toBe(1);
});

test("does not throw warning with expected props", () => {
  checkProps(Input, { secretWord: "party" });
});
