export function isValid(isbn13: string): boolean {
  //Alles ersetzen mit leerer String, die nicht 0-9 sind
  const onlyNumbersIbn13 = isbn13.replace(/[^0-9]/g, ""); //g is a global match finds all matches (not only the first).
  console.log(onlyNumbersIbn13);

  // Überprüfen, ob die ISBN genau 13 Ziffern hat
  if (onlyNumbersIbn13.length !== 13) {
    return false;
  }

  //Überprüfen, ob das Präfix 978 oder 979 ist
  if (!/^97[89]/.test(onlyNumbersIbn13)) {
    return false;
  }

  let sumWithoutLastIndex = 0;
  //Berechnung der Summe der Zahlen von Index 0 - 12
  for (let index = 0; index < 12; index++) {
    const number = parseInt(onlyNumbersIbn13[index]);
    if (index % 2 === 0) {
      sumWithoutLastIndex += number;
    } else {
      sumWithoutLastIndex += number * 3;
    }
  }

  //Berechnung der Prüfziffer
  const calculatedCheckDigit = (10 - (sumWithoutLastIndex % 10));
  console.log(calculatedCheckDigit);

  //Prüfzimmer von Isbn13
  const checkDegit = parseInt(onlyNumbersIbn13[12]);
  console.log(checkDegit);

  return calculatedCheckDigit === checkDegit;;

}
