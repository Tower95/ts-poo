console.log(Math.PI);
console.log(Math.max(...[1, 2, 3, 46, 34, 2, 24, 6]))

class MyMath {
  static readonly PI = 3.1416;

  static max(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc > curr ? acc : curr, -Infinity);
  }
}

console.log('My Math', MyMath.PI);
console.log('My Math', MyMath.max(-1, -2, -3, -46, -34, -2, -24, -6));
