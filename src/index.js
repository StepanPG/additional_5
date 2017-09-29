module.exports = function check(str, bracketsConfig) {
  let s = [],
    openingBrackets = bracketsConfig.map((el) => {
      return el[0]
    }),
    closingBrackets = bracketsConfig.map((el) => {
      return el[1]
    });

  for (let i = 0; i < str.length; i++) {

    for (let x = 0; x < bracketsConfig.length; x++) {

      if (str[i] == s[s.length - 1] && s[s.length - 1] == openingBrackets[x] && openingBrackets[x] == closingBrackets[x]) {
        s.pop();
      } else if (str[i] == openingBrackets[x]) {
        s.push(str[i]);
      } else if (str[i] == closingBrackets[x]) {
        let brackets = s.pop() + str[i];
        if (brackets != (openingBrackets[x] + closingBrackets[x])) {
          return false;
        }
      }

    }

  }

  if (!s.length) {
    return true;
  } else {
    return false;
  }

}
