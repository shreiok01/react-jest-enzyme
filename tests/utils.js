import { checkPropTypes } from "prop-types";

/**
 * Return node(s) with the given data-test attribute.
 * @param {ShadowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} value - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */

export const findByTestAttribute = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`);
};

/**
 * Assert that expected conforming props conform to propTypes definiton.
 * @param {React.Component} component - React component.
 * @param {object} conformingProps - Object of conforming props.
 * @returns {undefined} - Throws error if props do not conform.
 */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
