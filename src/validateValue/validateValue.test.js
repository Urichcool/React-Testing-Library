const validateValue = require("./validateValue");

describe("validateValue", () => {
  test("Correct value", () => {
    expect(validateValue(50)).toBe(true);
  });
    test("More than correct", () => {
      expect(validateValue(101)).toBe(false);
    });
    test("Less than correct", () => {
      expect(validateValue(-1)).toBe(false);
    });
      test("Minimum", () => {
        expect(validateValue(0)).toBe(true);
      });
      test("Maximum", () => {
        expect(validateValue(100)).toBe(true);
      });
});
