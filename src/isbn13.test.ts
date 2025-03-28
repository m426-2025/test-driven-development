import { isValid } from "./isbn13";

describe("isValid", () => {
  test("ISBN-13 with correct check digit prefix 978 return true", () => {
    expect(isValid("9780000000002")).toBe(true);
  });
  test("ISBN-13 with correct check digit prefix 978 return true", () => {
    expect(isValid("9780000000002")).toBe(true);
  });
  test("ISBN-13 with correct check digit prefix 978 and hyphen return true", () => {
    expect(isValid("978-3-12-732320-7")).toBe(true);
  });
  test("ISBN-13 with incorrect check digit return false", () => {
    expect(isValid("9780000000000")).toBe(false);
  });

  test("ISBN-13 with non-numeric characters return false", () => {
    expect(isValid("9781A34567890")).toBe(false);
  });

  test("ISBN-13 with length 12 return false", () => {
    expect(isValid("978123456789")).toBe(false);
  });

  test("ISBN-13 with prefix 123 return false", () => {
    expect(isValid("1234567890123")).toBe(false);
  });

  test.each([
    ["9780000000002", true], //prefix 978
    ["9790000000001", true], //prefix 979
    ["9781234567891", false], //check degit is wrong
    ["978123456789", false],  //length is 12
    ["1234567890123", false], //prefix 123
    ["978A234567890", false], //has non-numeric character
    ["9790000000001", true],  //prefix 979, check degit is correct
  ])(
    "isbn %s is valid: %p", (isbn, expected) => {
      expect(isValid(isbn)).toBe(expected);
    }
  );
});