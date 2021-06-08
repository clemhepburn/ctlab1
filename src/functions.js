export default ({ name }) => {
  return name;
};

export function copyAndPush(arr, x) {
  const copyArray = arr;
  copyArray.push(x);
  return [arr, copyArray];
}
