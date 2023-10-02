import App from "./App";
import { render, screen, act } from "@testing-library/react";

const renderApp = () => render(<App />);

describe("App", () => {
  it("In the first load it load the welcome page", () => {
    renderApp();
    expect(screen.getByTestId("welcome")).toBeInTheDocument();
  });

  it(`Click on Welcome link to correct page`, async () => {
    renderApp();

    act(() => screen.getByText("Welcome").click());

    await screen.findByTestId("welcome");
  });

  it(`Click on Infos link to correct page`, async () => {
    renderApp();

    act(() => screen.getByText("Infos").click());

    await screen.findByTestId("infos");
  });

  it(`Click on Wedding List link to correct page`, async () => {
    renderApp();

    screen.getByText("Wedding List").click();
    await screen.findByTestId("wedding-list");
  });

  it(`Click on Contacts link to correct page`, async () => {
    renderApp();

    screen.getByText("Contacts").click();
    await screen.findByTestId("contacts");
  });
});
