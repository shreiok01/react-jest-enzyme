import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Jotto from "./Jotto";

configure({ adapter: new Adapter() });

/**
 * Factory function to create Shallow Wrapper for the App Component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = () => shallow(<Jotto />);

const findByTestAttribute = (wrapper, value) =>
  wrapper.find(`[data-test='${value}']`);

test('render without errors', () => { 
  const wrapper = setup();
  const JottoComponent = findByTestAttribute(wrapper, 'component-jotto')
  expect(JottoComponent).toBe(1)
 })