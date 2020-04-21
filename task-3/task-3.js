const findLongestWord = function(string) {
  const arrayString = string.split(' ');
  let wordLength = 0;
  let longWord;

  for (let i = 0; i < arrayString.length; i += 1) {
    if (arrayString[i].length > wordLength) {
      wordLength = arrayString[i].length;
      longWord = arrayString[i];
    }
  }
  return longWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
