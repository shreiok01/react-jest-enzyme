import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import {findByTestAttribute} from '../tests/utils'

/**
 * Factory function to create Shallow Wrapper for the App Component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => shallow(<App />);


test("render without errors", () => {
  const wrapper = setup();
  const AppComponent = findByTestAttribute(wrapper, "component-app");
  expect(AppComponent.length).toBe(1);
});
