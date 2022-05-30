import { render } from "@testing-library/react";
import Index from "../pages/home";

describe("Home Page", () => {
  //it or test
  it("Show heading output", () => {
    const { getByTestId } = render(<Index />);
    expect(getByTestId("heading")).toHaveTextContent("Storefront");
  });
});
