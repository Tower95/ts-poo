export abstract class Animal {

  constructor(
    protected name: string,
  ) { }

  move() {
    console.log('Moving along!');
  }

  greeting() {
    return `Hello, I'm ${this.name}`;
  }

  protected doSomething() {
    console.log('Doing something');
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
      console.log(`woof! ${this.name}`);
    }
    this.doSomething();
  }

  move() {
    console.log('Running! as a dog');
    super.move();
  }
}

// const tony = new Animal('Tiger');
// tony.move();
// console.log(tony.greeting());

const dog = new Dog('guancho', 'Jorge');

// dog.name = 'pepe';
dog.woof(1);
dog.move();

