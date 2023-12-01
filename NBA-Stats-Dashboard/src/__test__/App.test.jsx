import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../App";

jest.mock("../components/Header", () => () => (
  <div data-testid="header-mock">Header</div>
));
jest.mock("../components/Footer", () => () => (
  <div data-testid="footer-mock">Footer</div>
));
jest.mock("../components/NavMenu", () => () => (
  <div data-testid="nav-menu-mock">NavMenu</div>
));
jest.mock("../components/MainContent", () => () => (
  <div data-testid="main-content-mock">MainContent</div>
));

describe("App Component", () => {
  it("should render all components correctly", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("header-mock")).toBeInTheDocument();
    expect(getByTestId("footer-mock")).toBeInTheDocument();
    expect(getByTestId("nav-menu-mock")).toBeInTheDocument();
    expect(getByTestId("main-content-mock")).toBeInTheDocument();
  });
});
