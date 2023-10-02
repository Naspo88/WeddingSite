import { render, screen } from "@testing-library/react";
import WelcomePage from "./WelcomePage";

test("renders learn react link", () => {
  render(<WelcomePage />);
  const linkElement = screen.getByText("Desi and Roberto Wedding!!");
  expect(linkElement).toBeInTheDocument();
});
