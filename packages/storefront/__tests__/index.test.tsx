import { render } from "@testing-library/react";
import Home from "../pages";

describe("Home Page", () => {
  //it or test
  it("Show heading output", () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId("heading")).toHaveTextContent("Storefront");
  });
});
