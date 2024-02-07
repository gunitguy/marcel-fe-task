import { Rack, Tube } from "../src/types";
import { canAddToRack } from "../src/scripts/group-tubes";

describe("canAddToRack", () => {
  test("returns true if tube does not have conflicts with existing tubes in rack", () => {
    const tube: Tube = {
      id: 1,
      city: "Warszawa",
      age: 25,
      companyName: "Company A",
      cityDistrict: "District Y",
      visionDefect: null
    };

    const rack: Rack = {
      index: 1,
      tubes: [
        {
          id: 3,
          city: "Warszawa",
          age: 26,
          companyName: "Company B",
          cityDistrict: "District X",
          visionDefect: -0.5
        },
        {
          id: 4,
          city: "Warszawa",
          age: 40,
          companyName: "Company C",
          cityDistrict: "District Z",
          visionDefect: 1.0
        }
      ]
    };

    expect(canAddToRack(tube, rack)).toBe(true);
  });

  test("returns false if tube conflicts with existing tubes in rack", () => {
    const tube: Tube = {
      id: 1,
      city: "Warszawa",
      age: 30,
      companyName: "Company B",
      cityDistrict: "District Y",
      visionDefect: -0.5
    };

    const rack: Rack = {
      index: 1,
      tubes: [
        {
          id: 3,
          city: "Warszawa",
          age: 25,
          companyName: "Company A",
          cityDistrict: "District X",
          visionDefect: -0.5
        },
        {
          id: 4,
          city: "Warszawa",
          age: 40,
          companyName: "Company C",
          cityDistrict: "District Z",
          visionDefect: 1.0
        }
      ]
    };

    expect(canAddToRack(tube, rack)).toBe(false);
  });
});
