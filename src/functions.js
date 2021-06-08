export default ({ name }) => {
  return name;
};

export function copyAndPush(arr, x) {
  const copyArray = [...arr];
  copyArray.push(x);
  return [arr, copyArray];
}

export function capitalizeAndFilter(arr) {
  const newArr = arr.filter(string => !string.startsWith('f') && !string.startsWith('F'));
  return newArr.map(string => string.toUpperCase());
}
