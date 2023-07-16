export class MyDate {

  constructor(
    public year: number = 1995,
    public month: number = 8,
    private day: number = 30
  ) { }

  private addPadding(value: number): string {
    if (value < 10) {
      return `0${value}`;
    }
    return `${value}`;
  }

  printFormat(): string {
    return `${this.year}/${this.addPadding(this.month)}/${this.addPadding(this.day)}`;
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  // set month(){

  // }

}

const myDate = new MyDate();
console.log('() =>', myDate.printFormat());

const myDate2 = new MyDate(2023);
console.log('(2023) =>', myDate2.printFormat());

const myDate3 = new MyDate(2023, 12);
console.log('(2023, 12) =>', myDate3.printFormat());
