import { render } from "@testing-library/react";
import Index from "../pages/shipping";

it("renders homepage unchanged", () => {
  const { container } = render(<Index />);
  expect(container).toMatchSnapshot();
});
