module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let newArr = [];
    let counter = 1;
    let nextLoop = false;
    arr.forEach(item => {
      if (Array.isArray(item)) {
        nextLoop = true;
        newArr.push(...item);
      } 
    })
    if (nextLoop) {
      counter += this.calculateDepth(newArr);
    } 
    return counter;
  }
};
 