export { };

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNunber: number) {
    this._secretNumber = secretNunber
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`
  }
}

let card = new MyNumberCard('ハム', 12345678910);
console.log(card.debugPrint());
card.secretNumber = 394839483;
console.log(card.debugPrint());
