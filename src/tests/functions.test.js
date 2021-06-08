import getName from '../functions.js';
import { copyAndPush } from '../functions.js';

describe('getName', () => {
  it('gets the name', () => {
    const model = { name: 'ryue', age: 55, job: 'architect', favCar: 'alfa romeo' };
    const name = getName(model);
    expect(name).toEqual('ryue');
  });
});

describe('copyAndPush', () => {
  it('copies the array and pushes a new value', () => {
    const numbers = [1, 2, 3];
    const newArray = copyAndPush(numbers, 4);
    expect(newArray).toEqual([1, 2, 3, 4]);
  });
});

