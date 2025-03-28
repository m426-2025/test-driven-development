export function calcPoints(hits: string): number {
  if (hits.trim() === "") return 0;

  const tokens = hits.trim().split(/\s+/);

  if (tokens.length % 2 !== 0) {
    throw new Error("Invalid input: missing value");
  }

  let total = 0;

  for (let i = 0; i < tokens.length; i += 2) {
    const multiplier = Number(tokens[i]);
    const sector = Number(tokens[i + 1]);

    if (isNaN(multiplier) || isNaN(sector)) {
      throw new Error("Invalid input: NaN");
    }

    total += multiplier * sector;
  }

  return total;
}

export function possibleCheckout(currentScore: number): string | null {
  const remaining = 501 - currentScore;

  if (remaining <= 0) return null;
  if (remaining % 2 !== 0) return null;

  const sector = remaining / 2;

  if (sector > 20) return null;

  return `Double ${sector}`;
}
