import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../../tests/helpers/renderWithRouter";
import NavBar from "./NavBar";
import { screen } from "@testing-library/react";

describe("NAVBAR TEST", () => {
  test("test main link", async () => {
    renderWithRouter(<NavBar />);
    const mainLink = screen.getByTestId("main-link");
    await userEvent.click(mainLink);
    expect(screen.getByTestId("main-page")).toBeInTheDocument();
  });
  test("test about link", async () => {
    renderWithRouter(<NavBar />);
    const aboutLink = screen.getByTestId("about-link");
    await userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });
  test("test users link", async () => {
    renderWithRouter(<NavBar />);
    const usersLink = screen.getByTestId("users-link");
    await userEvent.click(usersLink);
    expect(screen.getByTestId("users-page")).toBeInTheDocument();
  });
});
