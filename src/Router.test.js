import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";

describe("TEST APP", () => {
  test("Router test", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    fireEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
    fireEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });
  test("Error page test", () => {
    render(
      <MemoryRouter initialEntries={["/sdfsdfsdf"]}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId("not-found-page")).toBeInTheDocument();
  });
});
