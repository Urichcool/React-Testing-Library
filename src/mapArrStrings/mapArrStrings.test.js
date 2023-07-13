const mapArrStrings = require("./mapArrStrings");

describe("mapArrStrings", () => {
  test("Correct value", () => {
    expect(mapArrStrings([1, 2, 3])).toEqual(["1", "2", "3"]);
  });
     test("Mix", () => {
       expect(mapArrStrings([1, 2, 3, null, undefined, 'abc'])).toEqual(["1", "2", "3"]);
     });
     test("Empty arr", () => {
       expect(mapArrStrings([])).toEqual([]);
     });
     test("Negative", () => {
       expect(mapArrStrings([1, 2, 3])).not.toEqual([1,2,3,4]);
     });
});
