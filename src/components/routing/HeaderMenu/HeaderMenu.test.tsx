import HeaderMenu from "./HeaderMenu";
import { Page } from "../../../App";
import { render, screen } from "@testing-library/react";

const defaultPages: Page[] = [
  { id: "home", name: "Welcome", href: "/", component: <p>Welcome</p> },
  { id: "info", name: "Infos", href: "/infos", component: <p>Info</p> },
];

const renderHader = () =>
  render(
    <HeaderMenu pages={defaultPages}>
      <p>Wrapped stuff</p>
    </HeaderMenu>
  );

describe("Header Menu", () => {
  it("The wrapped contnet is visible", () => {
    renderHader();

    expect(screen.getByText("Wrapped stuff")).toBeInTheDocument();
  });

  it("Render the homepage logo", () => {
    renderHader();

    expect(screen.getByAltText("homepage-logo")).toBeInTheDocument();
  });

  it("Render all pages we pass", () => {
    renderHader();

    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(screen.getByText("Infos")).toBeInTheDocument();
  });
});
