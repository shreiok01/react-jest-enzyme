import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { App } from "./App";

configure({ adapter: new Adapter() });

/**
 * Factory function to create Shallow Wrapper for the App Component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => shallow(<App />);

const findByTestAttribute = (wrapper, value) =>
  wrapper.find(`[data-test='${value}']`);

test("render without errors", () => {
  const wrapper = setup();
  const AppComponent = findByTestAttribute(wrapper, "component-app");
  expect(AppComponent.length).toBe(1);
});
