import { formatDuration } from "./duration";

describe("formatDuration", () => {
  test("formats seconds only", () => {
    expect(formatDuration(33)).toBe("33s");
  });


});
