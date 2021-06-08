import fetch from 'node-fetch';

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

export function fetchQuotes() {
  return fetch('http://futuramaapi.herokuapp.com/api/quotes')
    .then(response => response.json())
    .then(data => ({
      name: data[0].character,
      text: data[0].quote,
      image: data[0].image
    }));

}
