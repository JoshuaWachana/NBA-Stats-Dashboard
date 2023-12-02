import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";

describe("Header Component", () => {
  it("renders header with title correctly", () => {
    const { getByText } = render(<Header />);

    const headerTitle = getByText("NBA-Stats");
    expect(headerTitle).toBeInTheDocument();
    expect(headerTitle.tagName).toBe("H1");
  });
});
