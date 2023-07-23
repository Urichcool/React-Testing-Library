import { screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import { renderWithRedux } from "../../tests/helpers/renderWithRedux";
import { renderTestApp } from "../../tests/helpers/renderTestApp";

describe("TEST COUNTER", () => {
  test("Test router", async () => {
      renderTestApp(null, {
          route: '/',
          initialState: {
              counter: {value: 10}
          }
    });
    const incrementBtn = screen.getByTestId("increment-btn");
    expect(screen.getByTestId("value-title")).toHaveTextContent("10");
    await userEvent.click(incrementBtn);
    expect(screen.getByTestId("value-title")).toHaveTextContent("11");
  });
});
