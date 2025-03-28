export function isValid(isbn13: string): boolean {
  if (!/^\d{13}$/.test(isbn13)) {
    throw new Error("Invalid ISBN-13");
  }

  const digits = isbn13.split("").map(Number);

  const sum = digits
    .slice(0, 12)
    .reduce((acc, digit, index) => acc + digit * (index % 2 === 0 ? 1 : 3), 0);

  const checksum = (10 - (sum % 10)) % 10;

  return digits[12] === checksum;
}
