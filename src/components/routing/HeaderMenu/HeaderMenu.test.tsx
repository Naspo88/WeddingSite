import HeaderMenu from "./HeaderMenu";
import { Page } from "../../../App";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

const defaultPages: Page[] = [
  { id: "home", name: "Welcome", href: "/", component: <p>Welcome</p> },
  { id: "info", name: "Infos", href: "/infos", component: <p>Info</p> },
];

const renderHader = () =>
  render(
    <HeaderMenu pages={defaultPages}>
      <p>Wrapped stuff</p>
    </HeaderMenu>,
    { wrapper: MemoryRouter }
  );

describe("Header Menu", () => {
  it("The wrapped contnet is visible", () => {
    renderHader();

    expect(screen.getByText("Wrapped stuff")).toBeInTheDocument();
  });

  it("Render all pages we pass", () => {
    renderHader();

    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(screen.getByText("Infos")).toBeInTheDocument();
  });
});
