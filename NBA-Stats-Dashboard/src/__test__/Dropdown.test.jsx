import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dropdown from "../components/Dropdown";

describe("Dropdown Component", () => {
  const options = [
    {
      title: "option 1",
    },
    {
      title: "option 2",
    },
    {
      title: "option 3",
    },
  ];

  it("renders with default title and options", () => {
    const { getByText, queryByText } = render(
      <Dropdown
        title="Select Criteria"
        options={options}
        onSelect={jest.fn()}
      />
    );

    expect(getByText("Select Criteria")).toBeInTheDocument();

    expect(queryByText("Option 1")).not.toBeInTheDocument();
  });
});
