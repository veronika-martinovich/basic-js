const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  let regExp = /^\d+(\.\d+)?/;
  if (
    !regExp.test(sampleActivity) ||
    typeof sampleActivity != "string" ||
    Number(sampleActivity) < 1 ||
    Number(sampleActivity) >= 15
  )
    return false;
  let sampleActivityFloating = sampleActivity.match(regExp);
  let k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(
    Math.log(Number(sampleActivityFloating[0]) / MODERN_ACTIVITY) / -k
  );
};
