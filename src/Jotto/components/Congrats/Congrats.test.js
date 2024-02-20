import React from "react";
import { shallow } from "enzyme";

import Congrats from "./Congrats";
import { checkProps, findByTestAttribute } from "../../../../tests/utils";

const defaultProps = {success: false}


/**
 * Factory function to create Shallow Wrapper for the Congrats Component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  const setupProps = {...defaultProps, ...props}
  return shallow(<Congrats {...setupProps} />);
};

test('renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, 'component-congrats');
  expect(component.length).toBe(1);
});
test('renders no text when `success` prop is false', () => {
  const wrapper = setup();
  const component = findByTestAttribute(wrapper, 'component-congrats');
  expect(component.text()).toBe('');
});
test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: true });
  const message = findByTestAttribute(wrapper, 'congrats-message');
  expect(message.text().length).not.toBe(0);
});
test('does not throw warning with expected props', () => {
  const expectedProps = { success: false };
  checkProps(Congrats, expectedProps);
});
