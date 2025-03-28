import { formatDuration } from "./duration";

describe("formating durations", () => {
    test("formatted duration of 0 is 0s", () => {
        expect(formatDuration(0)).toBe("0s");
    });
    test("negative duration throws error", () => {
        expect(() => formatDuration(-1)).toThrow("Negative numbers are not allowed.");
    });
    test("formatted duration of 33 is 33s", () => {
        expect(formatDuration(33)).toBe("33s");
    });
    test("formatted duration of 123 is 2m3s", () => {
        expect(formatDuration(123)).toBe("2m3s");
    });
    test("formatted duration of 500 is 8m20s", () => {
        expect(formatDuration(500)).toBe("8m20s");
    });
    test("formatted duration of 3600 is 1h", () => {
        expect(formatDuration(3600)).toBe("1h");
    });
    test("formatted duration of 3999 is 1h6m39s", () => {
        expect(formatDuration(3999)).toBe("1h6m39s");
    });
    test("rounds seconds correcty", () => {
        expect(formatDuration(0.5)).toBe("1s");
    });
});