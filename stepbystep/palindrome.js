// if any string fist to last same and last to first same then its called palindrome.

const palindrome = (str) => {
  let startIndex = 0;
  let lastIndex = str.length - 1;
  let result = true;
  while (lastIndex > startIndex) {
    if (str[lastIndex] !== str[startIndex]) {
      result = false;
    }
    lastIndex--;
    startIndex++;
  }
  return result;
};

const isPalindrome = palindrome("aavtdvaa");

console.log(isPalindrome);
