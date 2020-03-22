export { };

class Animal {

  constructor(public name: string) {

  }

  run(): string {
    return 'I can run';
  }
}

let animal = new Animal('mickry');
console.log(animal.run());

class Lion extends Animal {
  public speed: number;

  constructor(public name: string, speed: number) {
    super(name);

    this.speed = speed;
  }

  run(): string {
    return `${super.run()} ${this.speed}km.`
  }
}

let lion = new Lion('simba', 80)
console.log(lion.run())
