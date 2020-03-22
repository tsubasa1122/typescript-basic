export { };

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work() {
    return `Hey, geys! A This is ${this.firstName}! Are you interested in TypeScript?`
  }
}

let me = new Me();
console.log(Me.isProgrammer);
console.log(Me.work());
