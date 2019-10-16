import React from "react";
import * as rtl from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from "./App";

//afterEach and beforeEach is comes from jest global.
// include it if you want specific actions
// https://jestjs.io/docs/en/api
afterEach(rtl.cleanup);

// describe is a block used to organize code, but it's becoming less popular
// regular test is more standard now
// describe also has scoping so you can use it to block scope the before and afterEach
describe("The Text is Rendering properly", () => {
  it('renders the text Dashboard', () => {
    const wrapper = rtl.render(
      <App />
    )
    const element = wrapper.queryByText(/dashboard/i)
    expect(element).toBeInTheDocument();
    // expect(element).toBeTruthy();
    // expect(element).toBeVisible();
  })

  it('renders the text Foul', () => {
    const wrapper = rtl.render(
      <App />
    )
    const element = wrapper.queryByText(/foul/i)
    // expect(element).toBeInTheDocument();
    expect(element).toBeTruthy();
    // expect(element).toBeVisible();
  })

  it('renders the exact text Strikes', () => {
    const wrapper = rtl.render(
      <App />
    )
    const element = wrapper.queryByText(/Strikes/)
    // expect(element).toBeInTheDocument();
    // expect(element).toBeTruthy();
    expect(element).toBeVisible();
  })

})

// regular way to test
test("Renders without Crashing", () => {
  const wrapper = rtl.render(
    <App />
  )
  expect(wrapper).toBeTruthy();
})


// All code below From Don
test('Strike Button clicked with correct count', () => {
  const wrapper = rtl.render(<App />);
  const strikeButton = wrapper.getByTestId('strike');
  const strikeCount = wrapper.getByTestId('strikes');
  expect(strikeCount.textContent)
    .toBe(`Strikes: 0`);
  rtl.fireEvent.click(strikeButton);
  expect(strikeCount.textContent)
    .toBe(`Strikes: 1`);
  rtl.fireEvent.click(strikeButton);
  expect(strikeCount.textContent)
    .toBe(`Strikes: 2`);
  rtl.fireEvent.click(strikeButton);
  expect(strikeCount.textContent)
    .toBe(`Strikes: 0`);
});

test('Ball Button clicked with correct count', () => {
  const wrapper = rtl.render(<App />);
  const ballButton = wrapper.getByTestId('ball');
  const ballCount = wrapper.getByTestId('balls');
  expect(ballCount.textContent)
    .toBe(`Balls: 0`);
  rtl.fireEvent.click(ballButton);
  expect(ballCount.textContent)
    .toBe(`Balls: 1`);
  rtl.fireEvent.click(ballButton);
  expect(ballCount.textContent)
    .toBe(`Balls: 2`);
  rtl.fireEvent.click(ballButton);
  expect(ballCount.textContent)
    .toBe(`Balls: 3`);
  rtl.fireEvent.click(ballButton);
  expect(ballCount.textContent)
    .toBe(`Balls: 0`);
});

test('Foul Button clicked 10 times, strike count maxes out at 2', () => {
  const wrapper = rtl.render(<App />);
  const foulButton = wrapper.getByTestId('foul');
  const strikeCount = wrapper.getByTestId('strikes');
  expect(strikeCount.textContent)
    .toBe(`Strikes: 0`);
  rtl.fireEvent.click(foulButton);
  expect(strikeCount.textContent)
    .toBe(`Strikes: 1`);
  rtl.fireEvent.click(foulButton);
  expect(strikeCount.textContent)
    .toBe(`Strikes: 2`);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  rtl.fireEvent.click(foulButton);
  expect(strikeCount.textContent)
    .toBe(`Strikes: 2`);
});

test('With Strikes at 2, Balls at 2, resetButton sets counts to 0', () => {
  const wrapper = rtl.render(<App />);
  const resetButton = wrapper.getByTestId('reset');
  const ballButton = wrapper.getByTestId('ball');
  const ballCount = wrapper.getByTestId('balls');
  const strikeButton = wrapper.getByTestId('strike');
  const strikeCount = wrapper.getByTestId('strikes');
  rtl.fireEvent.click(ballButton);
  rtl.fireEvent.click(strikeButton);
  rtl.fireEvent.click(ballButton);
  rtl.fireEvent.click(strikeButton);
  expect(strikeCount.textContent)
    .toBe(`Strikes: 2`);
  expect(ballCount.textContent)
    .toBe(`Balls: 2`);
  rtl.fireEvent.click(resetButton);
  expect(strikeCount.textContent)
    .toBe(`Strikes: 0`);
  expect(ballCount.textContent)
    .toBe(`Balls: 0`);
});