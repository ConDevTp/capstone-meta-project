import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router";

test("renders App without crashing", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
