// function getValue(value: unknown) {
//   return value;
// }

// function getValue(value: number | string) {
//   return value;
// }

function getValue<T>(value: T) {
  return value;
}

console.log(getValue<number>(12).toFixed(2));
console.log(getValue<string>('12').toUpperCase());

const value = getValue<number[]>([1, 2, 3, 4, 5]);
console.log(value)
