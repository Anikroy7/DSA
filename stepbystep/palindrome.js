// if any string fist to last same and last to first same then its called palindrome.

/* const palindrome = (str) => {
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

const isPalindrome = palindrome("aavtdvaa") */ //recursive way

const isPalindrome = (value) => {
  let firstIndex = 0;
  let lastIndex = value.length - 1;
  if (value.length === 0 || value.length === 1) {
    return true;
  }

  if (value[firstIndex] === value[lastIndex]) {
    return isPalindrome(value.substring(1, value.length-1));
  }
  return false;
};

console.log(isPalindrome('racecar'));
