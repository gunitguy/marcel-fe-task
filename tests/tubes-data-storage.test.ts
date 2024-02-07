import TubesDataStorage from "../src/scripts/tubes-data-storage";

describe("TubesDataStorage", () => {
  beforeEach(() => {
    // Clear the tubes data before each test
    TubesDataStorage.setTubes([]);
  });

  test("getTubes should return empty array if no tubes are set", () => {
    expect(TubesDataStorage.getTubes()).toEqual([]);
  });

  test("setTubes should set tubes data correctly", () => {
    const testData = [
      {
        id: 1,
        age: 20,
        companyName: "Company1",
        city: "Krakow",
        cityDistrict: "District1",
        visionDefect: null
      },
      {
        id: 2,
        age: 22,
        companyName: "Company2",
        city: "Krakow",
        cityDistrict: "District2",
        visionDefect: -0.5
      }
    ];
    TubesDataStorage.setTubes(testData);
    expect(TubesDataStorage.getTubes()).toEqual(testData);
  });
});
