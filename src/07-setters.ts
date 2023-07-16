export class MyDate {

  constructor(
    public year: number = 1995,
    private _month: number = 8,
    private _day: number = 30
  ) { }

  private addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  printFormat(): string {
    return `${this.year}/${this.addPadding(this._month)}/${this.addPadding(this.day)}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
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

  get month(): number {
    return this._month;
  }

  set month(newValue: number) {
    if (newValue <= 12 && newValue >= 1) {
      this._month = newValue;
    } else {

      throw new Error('Invalid month');

    }
  }

}

const myDate = new MyDate();
console.log('() =>', myDate.printFormat());

myDate.month = -2;
console.log(myDate.month);
