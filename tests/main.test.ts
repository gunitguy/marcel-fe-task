import testFunction from "../src/scripts/main";

describe("testFunction", () => {
  it("should return proper string", () => {
    expect(testFunction()).toBe("Hello from test function");
  });
});
