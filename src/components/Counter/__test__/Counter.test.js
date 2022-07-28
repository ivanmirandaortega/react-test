import React from "react";
import Counter from "../Counter";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("should render a header with correct text", () => {
  const { getByTestId } = render(<Counter />);
  const headerEl = getByTestId("header");

  expect(headerEl.textContent).toBe("My Counter");
});

test("counter initially start with text of 0", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
});

test("input contains initial value of 1", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");
});

test("add button renders with +", () => {
  const { getByTestId } = render(<Counter />);
  const addBtn = getByTestId("add-btn");

  expect(addBtn.textContent).toBe("+");
});

test("subtract button renders with -", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtn = getByTestId("subtract-btn");

  expect(subtractBtn.textContent).toBe("-");
});

test("change value of input works correcty", () => {
  const { getByTestId } = render(<Counter />);
  const inputEl = getByTestId("input");

  expect(inputEl.value).toBe("1");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  expect(inputEl.value).toBe("5");
});

test("click on plus button adds one to counter", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe("1");
});

test("click on subtract button subtracts one from counter", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");

  expect(counterEl.textContent).toBe("0");
  fireEvent.click(subtractBtnEl);
  expect(counterEl.textContent).toBe("-1");
});

test("changing inout value then clicking on add button works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId("add-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(addBtnEl);
  expect(counterEl.textContent).toBe("5");
});

test("changing inout value then clicking on subtract button works correctly", () => {
  const { getByTestId } = render(<Counter />);
  const subtractBtnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });
  fireEvent.click(subtractBtnEl);
  expect(counterEl.textContent).toBe("-5");
});

test("adding and subtracting leads to the correct counter number", () => {
  const { getByTestId } = render(<Counter />);
  const addBtnEl = getByTestId("add-btn");
  const subtractBtnEl = getByTestId("subtract-btn");
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");

  fireEvent.change(inputEl, {
    target: {
      value: "10",
    },
  });

  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(addBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe("20");

  fireEvent.change(inputEl, {
    target: {
      value: "5",
    },
  });

  fireEvent.click(addBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  expect(counterEl.textContent).toBe("15");
});

test("counter contains correct className", () => {
  const { getByTestId } = render(<Counter />);
  const counterEl = getByTestId("counter");
  const inputEl = getByTestId("input");
  const addBtnEl = getByTestId("add-btn");
  const subtractBtnEl = getByTestId("subtract-btn");

  expect(counterEl.className).toBe("");

  fireEvent.change(inputEl, {
    target: {
      value: "50",
    },
  });

  fireEvent.click(addBtnEl);

  expect(counterEl.className).toBe("");

  fireEvent.click(addBtnEl);

  expect(counterEl.className).toBe("green");

  fireEvent.click(addBtnEl);

  expect(counterEl.className).toBe("green");

  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  expect(counterEl.className).toBe("");

  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);
  fireEvent.click(subtractBtnEl);

  expect(counterEl.className).toBe("red");
});
