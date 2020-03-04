module.exports = function repeater(str, options) {
  let string, addition;
  if (typeof str == "string" || typeof str == "boolean") string = str;
  else string = String(str);
  if (
    typeof options.addition == "string" ||
    typeof options.addition == "boolean"
  )
    addition = options.addition;
  else addition = String(options.addition);

  let repeatTimes, additionRepeatTimes;
  if (typeof options.repeatTimes == "number") repeatTimes = options.repeatTimes;
  else if (options.repeatTimes == undefined) repeatTimes = 1;
  if (typeof options.additionRepeatTimes == "number")
    additionRepeatTimes = options.additionRepeatTimes;
  else if (options.additionRepeatTimes == undefined) additionRepeatTimes = 1;

  let separator, additionSeparator;
  if (typeof options.separator == "string") separator = options.separator;
  else separator = "+";
  if (typeof options.additionSeparator == "string")
    additionSeparator = options.additionSeparator;
  else additionSeparator = "|";

  let arr = [];
  for (i = 1; i <= repeatTimes; i++) {
    arr.push(string);

    if (options.addition !== undefined) {
      if (additionRepeatTimes <= 1) arr.push(addition);
      else {
        for (j = 1; j <= additionRepeatTimes; j++) {
          arr.push(addition);
          if (j < additionRepeatTimes) arr.push(additionSeparator);
        }
      }
    }
    if (i < repeatTimes) arr.push(separator);
  }
  return arr.join("");
};
