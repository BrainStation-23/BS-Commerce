import { render } from "@testing-library/react";
import Index from "../pages/shipping";
describe("Shipping", () => {
  //it or test
  test("Show heading output", () => {
    const { getByTestId } = render(<Index />);
    expect(getByTestId("nnn")).toHaveTextContent("Contact");
  });
});
