module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("Error");
  let newArr = [];
  arr.forEach((item, index, array) => {
    if (
      item !== "--discard-next" &&
      item !== "--discard-prev" &&
      item !== "--double-next" &&
      item !== "--double-prev"
    )
      newArr.push(item);
    if (item === "--discard-prev" && array[index - 1] != undefined) newArr.pop();
    if (array[index - 1] != undefined && array[index - 1] === "--discard-next") newArr.pop();
    if (item === "--double-prev" && array[index - 1] != undefined) newArr.push(array[index - 1]);
    if (array[index - 1] != undefined && array[index - 1] === "--double-next") newArr.push(item);
  });
  return newArr;
};
