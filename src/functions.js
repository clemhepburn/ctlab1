export default ({ name }) => {
  return name;
};

export function copyAndPush(arr, x) {
  const copyArray = [...arr];
  copyArray.push(x);
  return [arr, copyArray];
}

export function capitalizeAndFilter(arr) {
  const newArr = [];
  for(const string of arr) {
    if(!string.startsWith('f') && !string.startsWith('F')) {
      newArr.push(string[0].toUpperCase() + string.slice(1));
    }
  }
  return newArr;
}
