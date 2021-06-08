import getName from '../functions.js';
import { copyAndPush } from '../functions.js';
import { capitalizeAndFilter } from '../functions';

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
    expect(newArray).toEqual([numbers, [1, 2, 3, 4]]);
  });
});

describe('capitalizeAndFilter', () => {
  it('capitalizes all strings and filters out any that begins with f', () => {
    const example = ['folded like a sheet of paper', 'like fumes', 'Finale: I have turned on with shifting strands of light'];
    const poemArray = capitalizeAndFilter(example);
    expect(poemArray).toEqual(['Like fumes']);
  });
});



