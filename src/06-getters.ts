export class MyDate {

  constructor(
    public year: number = 1995,
    public month: number = 8,
    private _day: number = 30
  ) { }

  private addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  printFormat(): string {
    return `${this.year}/${this.addPadding(this.month)}/${this.addPadding(this._day)}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get day(): number {
    return this._day;
  }

  get isLeapYear(): boolean {
    return this.year % 4 === 0;
  }

}

const myDate = new MyDate();
console.log(myDate.printFormat());
// console.log(myDate.getDay());
console.log(myDate.day);
console.log('is Leap year? :', myDate.isLeapYear);

const myDate2 = new MyDate(2001, 2, 29);
console.log(myDate2.isLeapYear);

