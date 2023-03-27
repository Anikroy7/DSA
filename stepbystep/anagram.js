// we need to compare two string.
//if two strings all characters and characters length would be same then its called anagram oterwise not.

const anagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }
  const obj = {};
  for (let v of str1) {
    obj[v] = (obj[v] || 0) + 1;
  }
  for (let v of str2) {
    if(!obj[v]){
        return false
    }
    if (obj[v]) {
        obj[v]--
    }
  }
  return true
};

console.log(anagram("hello", "ehllo"));
