import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "../components/Footer";

describe("Footer Component", () => {
  it("renders footer correctly", () => {
    const { getByText } = render(<Footer />);
    const footerContent = getByText("© Joshua Wachana & Harshita Jaiswal - Fall 2023");
    expect(footerContent).toBeInTheDocument();
    expect(footerContent.tagName).toBe("P");
  });
});
