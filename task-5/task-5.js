const checkForSpam = function(message) {
  const lowCaseMessage = message.toLowerCase().split(' ');
  // eslint-disable-next-line
  for (const banWord of lowCaseMessage) {
    if (banWord.includes('sale')) {
      return true; // eslint-disable-next-line
    } else if (banWord.includes('spam')) {
      return true;
    }
  }

  return false;
};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
