export function calcPoints(hits: string): number {

  const Wuerfe =   hits.split(" ").map(Number);
  let Punkte = 0;

  for (let i = 0; i < Wuerfe.length; i += 2) {
    Punkte += Wuerfe[i] * Wuerfe[i + 1];
     }


  return Punkte;
}


export function possibleCheckout(x: number): string {
  let rest = 501 - x;

  if (rest == 50){
      return 'Bulls Eye'
  }
  else if (rest % 2 != 0 || rest > 40) {
    return 'unmöglich';
  }
  else{
    return 'Double ' + rest / 2;
  } 
}

