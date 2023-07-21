import userEvent from "@testing-library/user-event";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";
import NavBar from "./NavBar";
import { screen } from "@testing-library/react";

describe("NAVBAR TEST", () => {
  test("renders learn react link", async () => {
    renderWithRouter(<NavBar />);
    const mainLink = screen.getByTestId("main-link");
    const aboutLink = screen.getByTestId("about-link");
    const usersLink = screen.getByTestId("users-link");
    await userEvent.click(aboutLink);
    expect(screen.getByTestId("about-page")).toBeInTheDocument();
  });
});
