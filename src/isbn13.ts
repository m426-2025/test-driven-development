

export function isValid(isbn13: string): boolean {

  if (isbn13.length !== 13) {
    return false; 
  }

  /*sind nur Zahlen in Buchnumer*/
  if (!/^\d+$/.test(isbn13)) {
    return false;  
  }


  let sum = 0;
  for (let i = 0; i < 12; i++) {
    const digit = parseInt(isbn13.charAt(i));
    if  (i % 2 === 0){
      sum += digit
    } 
    else{
      sum += digit * 3
    }
  }
  const checkDigit = (10 - (sum % 10)) % 10;

  return checkDigit == parseInt(isbn13.charAt(12));
}


