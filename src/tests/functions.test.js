import getName from '../functions.js';

describe('getName', () => {
  it('gets the name', () => {
    const model = { name: 'ryue', age: 55, job: 'architect', favCar: 'alfa romeo' };
    const name = getName(model);
    expect(name).toEqual('ryue');
  });
});
