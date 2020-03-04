module.exports = function getSeason(date) {
  if (date == undefined) return 'Unable to determine the time of year!';
  if (!date.getTimezoneOffset()) throw new Error('Error');
  let month = date.getMonth();
  if (month <=1 || month == 11) return 'winter'; 
  else if (month >=2 && month <=4) return 'spring'; 
  else if (month >=5 && month <=7) return 'summer';
  else if (month >=8 && month <=10) return 'autumn';
  else throw new Error('Error');
};
