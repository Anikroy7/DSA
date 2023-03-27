const checkMaxiumCharacter = (str) => {
  const strObj = {};
  let maxKey = "";
  for (let i = 0; i < str.length; i++) {
    const key = str[i];
    if (!strObj[key]) {
      strObj[key] = 0;
    }
    strObj[key]++;

    if (maxKey === "" || strObj[key] > strObj[maxKey]&& key!==' ') {
      maxKey = key;
    }
  }

  return {maxKey, strObj};
};

const maximum = checkMaxiumCharacter("this is my countrfffy");

console.log(maximum);
