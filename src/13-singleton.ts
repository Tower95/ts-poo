export class MyService {

  static instance: MyService | null = null;
  private constructor(
    private _name: string
  ) { }

  static create(name: string) {
    if (MyService.instance !== null) {
      MyService.instance.name = name;
      return MyService.instance;
    } else {
      MyService.instance = new MyService(name);
      return MyService.instance;
    }
  }

  getName() {
    return this._name;
  }

  private set name(_name: string) {
    this._name = _name;
  }
}

const myService1 = MyService.create('myService1');
console.log(myService1.getName());

const myService2 = MyService.create('myService2');
console.log(myService2.getName());

console.log(myService1 === myService2)
