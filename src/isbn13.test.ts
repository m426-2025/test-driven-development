import { isValid } from "./isbn13";

describe("isValid", () => {
  test.each([
    ["9783161484100", true], // korrekt
    ["9780306406157", true], // korrekt
    ["9781861972712", true], // korrekt
    ["9783161484101", false], // falsche Prüfziffer
    ["1234567890123", false], // falsche Prüfziffer
  ])("isValid('%s') === %s", (isbn, expected) => {
    expect(isValid(isbn)).toBe(expected);
  });

  test("throws error on invalid ISBN (non-digits or wrong length)", () => {
    expect(() => isValid("97831614841AB")).toThrow("Invalid ISBN-13");
    expect(() => isValid("97831614")).toThrow("Invalid ISBN-13");
    expect(() => isValid("")).toThrow("Invalid ISBN-13");
  });
});
