import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Counter from "./Counter";

configure({ adapter: new Adapter() });

/**
 * Factory function to create Shallow Wrapper for the App Component.
 * @function setup
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
  return shallow(<Counter {...props} />);
};

const findByTestAttribute = (wrapper, value) =>
  wrapper.find(`[data-test='${value}']`);

test("render without errors", () => {
  const wrapper = setup();
  const appComponent = findByTestAttribute(wrapper, "component-counter");
  expect(appComponent.length).toBe(1);
});

test("renders counter display", () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttribute(wrapper, "counter-display");
  expect(counterDisplay.length).toBe(1);
});

test("counter starts at 0", () => {
  const wrapper = setup();
  const count = findByTestAttribute(wrapper, "count").text();
  expect(count).toBe("0");
});

describe("Increment", () => {
  test("renders increment button", () => {
    const wrapper = setup();
    const button = findByTestAttribute(wrapper, "increment-button");
    expect(button.length).toBe(1);
  });

  test("clicking button increments counter display", () => {
    const wrapper = setup();

    // Find the button
    const button = findByTestAttribute(wrapper, "increment-button");
    // Click the button
    button.simulate("click");

    // check the counter
    const count = findByTestAttribute(wrapper, "count").text();
    expect(count).toBe("1");
  });
});

describe("Decrement", () => {
  test("renders decrement button", () => {
    const wrapper = setup();
    const decButton = findByTestAttribute(wrapper, "decrement-button");
    expect(decButton.length).toBe(1);
  });
});

test("clicking decrement button decrements counter display when state is greater than 0", () => {
  const wrapper = setup();

  // click the increment button so that the counter is greater than 0
  const incButton = findByTestAttribute(wrapper, "increment-button");
  incButton.simulate("click");

  // find decrement button and click
  const decButton = findByTestAttribute(wrapper, "decrement-button");
  decButton.simulate("click");

  // find display and test value
  const count = findByTestAttribute(wrapper, "count").text();
  expect(count).toBe("0");
});

describe("Error when counter goes below 0", () => {
  test("error does not show when not needed", () => {
    // I plan to implement this by using a "hidden" class for the error div
    // I plan to use the data-test value 'error-message' for the error div
    const wrapper = setup();
    const errorMessage = findByTestAttribute(wrapper, "error-message");

    // using enzyme's ".hasClass()" method
    // http://airbnb.io/enzyme/docs/api/ShallowWrapper/hasClass.html
    const errorHasHiddenClass = errorMessage.hasClass("hidden");
    expect(errorHasHiddenClass).toBe(true);
  });

  describe("Counter is zero and increment is clicked", () => {
    let wrapper;
    beforeEach(() => {
      // no need to set counter value here; default value of 0 is good
      wrapper = setup();

      // find button and click
      const button = findByTestAttribute(wrapper, "decrement-button");
      button.simulate("click");
    });
    test("error shows", () => {
      // Check the class of error message
      const errorMessage = findByTestAttribute(wrapper, "error-message");
      const errorHasHiddenClass = errorMessage.hasClass("hidden");
      expect(errorHasHiddenClass).toBe(false);
    });
    test("counter will display 0", () => {
      const count = findByTestAttribute(wrapper, "count").text();
      expect(count).toBe("0");
    });
    test("clicking increment will clears the error", () => {
      // find and click the increment button
      const incrementButton = findByTestAttribute(wrapper, "increment-button");
      incrementButton.simulate("click");

      // check the class of the error message
      const errorMessage = findByTestAttribute(wrapper, "error-message");
      const errorHasHiddenClass = errorMessage.hasClass("hidden");
      expect(errorHasHiddenClass).toBe(true);
    });
  });
});
