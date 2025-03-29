import { formatDuration } from "./duration";

describe("formatDuration", () => {
  test("formats only seconds", () => {
    expect(formatDuration(33)).toBe("33s");       // 0m33s
  });

  test("formats seconds to minutes and seconds", () => {
    expect(formatDuration(123)).toBe("2m3s");     // 2m 3s
    expect(formatDuration(500)).toBe("8m20s");    // 8m 20s
  });

  test("formats full hour", () => {
    expect(formatDuration(3600)).toBe("1h");      // 1h 0m 0s
  });

  test("formats hour, minute and second", () => {
    expect(formatDuration(3999)).toBe("1h6m39s"); // 1h 6m 39s
  });

  test("zero seconds", () => {
    expect(formatDuration(0)).toBe("0s");
  });

  test("rounds decimal seconds", () => {
    expect(formatDuration(1.4)).toBe("1s");
    expect(formatDuration(59.5)).toBe("1m");
  });

  test("throws on negative seconds", () => {
    expect(() => formatDuration(-5)).toThrow("Negative duration not allowed");
  });
});
