import React from "react";
import { shallow } from "enzyme";
import Input from "./Input";

/**
 * Factory function to create Shallow Wrapper for the Input Component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => {
  return shallow(<Input />);
};

const findByTestAttribute = (wrapper, value) =>
  wrapper.find(`[data-test='${value}']`);

  test("render without errors", () => {
    const wrapper = setup();
    const CounterComponent = findByTestAttribute(wrapper, "component-input");
    expect(CounterComponent.length).toBe(1);
  });
  