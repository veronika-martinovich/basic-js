module.exports = function countCats(arr) {
  let counter = 0;
  arr.forEach(item => {
    let regExp = /^\^\^$/;
    item.forEach(item1 => regExp.test(item1) ? counter++ : counter)
  });
  return counter;
};
