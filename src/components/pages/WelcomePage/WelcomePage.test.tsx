import { render, screen } from "@testing-library/react";
import WelcomePage from "./WelcomePage";

test("renders learn react link", () => {
  render(<WelcomePage />);
  const linkElement = screen.getByText(
    "Per me si va ne la città dolente, per me si va ne l'etterno dolore, per mesi va tra la perduta gente!"
  );
  expect(linkElement).toBeInTheDocument();
});
