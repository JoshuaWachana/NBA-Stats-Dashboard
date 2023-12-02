import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import MainContent from "../components/MainContent";
import "@testing-library/jest-dom";

jest.mock("../components/PlayerStats", () => () => (
  <div data-testid="player-stats-mock">PlayerStats</div>
));

jest.mock("../components/GeoMaps", () => () => (
  <div data-testid="geo-maps-mock">GeoMaps</div>
));

jest.mock("../components/Comparison", () => () => (
  <div data-testid="comparison-mock">Comparison</div>
));

describe("MainContent Component", () => {
  it("Should render PlayerStats on default route", () => {
    const { getByTestId } = render(
      <MemoryRouter>
        <MainContent />
      </MemoryRouter>
    );

    expect(getByTestId("player-stats-mock")).toBeInTheDocument();
  });

  it("Should render GeoMaps on geo-maps route", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/geo-maps"]}>
        <MainContent />
      </MemoryRouter>
    );

    expect(getByTestId("geo-maps-mock")).toBeInTheDocument();
  });

  it("Should render Comparison on compare route", () => {
    const { getByTestId } = render(
      <MemoryRouter initialEntries={["/compare"]}>
        <MainContent />
      </MemoryRouter>
    );

    expect(getByTestId("comparison-mock")).toBeInTheDocument();
  });
});
