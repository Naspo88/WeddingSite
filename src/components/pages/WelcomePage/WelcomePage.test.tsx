import { render, screen } from "@testing-library/react";
import WelcomePage from "./WelcomePage";

test("renders learn react link", () => {
  render(<WelcomePage />);
  expect(screen.getByText("Desi and Roberto")).toBeInTheDocument();
});
