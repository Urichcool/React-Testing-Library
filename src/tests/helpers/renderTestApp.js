import AppRouter from "../../Routes/AppRouter";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { createReduxStore } from "../../store/store";
import { Provider } from "react-redux";

export const renderTestApp = (component, options) => {
  const store = createReduxStore(options?.initialState);
  return render(
    <Provider store={store}>
      <MemoryRouter initialEntries={[options?.route]}>
        <AppRouter />
        {component}
      </MemoryRouter>
    </Provider>
  );
};
