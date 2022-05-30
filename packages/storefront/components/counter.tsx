import React, { FC } from "react";

const TestEvents: FC = () => {
  const [counter, setCounter] = React.useState(0);

  return (
    <>
      <h1 data-testid="counter">{counter}</h1>
      <button data-testid="button-up" onClick={() => setCounter(counter + 1)}>
        Up
      </button>
      <button data-testid="button-down" onClick={() => setCounter(counter - 1)}>
        Down
      </button>
    </>
  );
};

export default TestEvents;

// import { render, screen, fireEvent } from "@testing-library/react";
// import TestEvents from "../components/counter";

// it("increments counter", () => {
//   const { getByTestId } = render(<TestEvents />);

//   fireEvent.click(getByTestId("button-up"));

//   expect(getByTestId("counter")).toHaveTextContent("1");
// });

// it("decrements counter", () => {
//   const { getByTestId } = render(<TestEvents />);

//   fireEvent.click(getByTestId("button-down"));

//   expect(getByTestId("counter")).toHaveTextContent("-1");
// });

// describe("Home Page", () => {
//   //it or test
//   it("Show heading output", () => {
//     const { getByTestId } = render(<Index />);
//     expect(getByTestId("heading")).toHaveTextContent("Storefront");
//   });

// });
