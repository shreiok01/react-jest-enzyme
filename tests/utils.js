
/**
 * Return node(s) with the given data-test attribute.
 * @param {ShadowWrapper} wrapper - Enzyme shallow wrapper.
 * @param {string} value - Value of data-test attribute for search.
 * @returns {ShallowWrapper}
 */


export const findByTestAttribute = (wrapper, value) => {
  return wrapper.find(`[data-test='${value}']`)
}