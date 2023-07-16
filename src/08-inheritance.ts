export class Animal {

  constructor(
    public name: string,
  ) { }

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}

export class Dog extends Animal {

  constructor(
    _name: string = 'Dog',
    public owner: string = 'No one',
  ) {
    super(_name);
  }

  woof(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('woof!');
    }
  }
}

const tony = new Animal('Tiger');
tony.move();
console.log(tony.greeting());

const dog = new Dog('guancho', 'Jorge');
dog.move();
console.log(dog.greeting());
dog.woof(3);
console.log(dog.owner);

