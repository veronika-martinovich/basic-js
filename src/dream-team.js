module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr) || arr === null) return false;
  return arr.map(item => {
    if (typeof item == 'string') {
      return item.trim().slice(0, 1).toUpperCase();
    }
  }).sort().join('');
};
