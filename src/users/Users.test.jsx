import { render, screen, fireEvent } from "@testing-library/react";
import Users from "./Users";
import axios from "axios";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { Route, Routes } from "react-router-dom";
import UserDetailsPage from "../pages/UserDetailsPage";
import { jest } from "@jest/globals";

jest.mock('axios')

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
    render(
      <MemoryRouter initialEntries={["/users"]}>
        <Routes>
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<UserDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );
    const users = await screen.findAllByTestId("user-item");
    await userEvent.click(users[0]);
    expect(users.length).toBe(3);
    expect(screen.getByTestId("user-page")).toBeInTheDocument();
  });
});
