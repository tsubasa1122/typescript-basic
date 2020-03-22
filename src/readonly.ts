export { };

class VisaCard {
  constructor(readonly owner: string) {
  }
}

let myVisaCard = new VisaCard('はむ')
console.log(myVisaCard.owner);
