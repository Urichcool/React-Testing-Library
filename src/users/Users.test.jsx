import { render, screen, fireEvent } from "@testing-library/react";
import Users from "./Users";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import AppRouter from "../Routes/AppRouter";
import { renderWithRouter } from "../tests/helpers/renderWithRouter";

jest.mock("axios");

describe("USERS TEST", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });
  afterEach(() => {
    jest.clearAllMocks();
  });
  test("renders learn react link", async () => {
    axios.get.mockReturnValue(response);
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId("user-item");
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
  });
  test("test redirect to details-page", async () => {
    axios.get.mockReturnValue(response);
    renderWithRouter(null, "/users");
    const users = await screen.findAllByTestId("user-item");
    await userEvent.click(users[0]);
    expect(users.length).toBe(3);
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});
