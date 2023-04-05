/* console.log("hello");

const apple = (x) => {
    console.log('apple', x);
    if(x<10){
        apple(x+1)
    }
};

apple(0) */

const factorial = (number) => {
  console.log("number", number);
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
};

// console.log(factorial(5));

//Convert to Binary

const convertBinary = (num, result) => {
  if (num === 0) {
    return result;
  }
  result = (num % 2) + result;
  return convertBinary(Math.floor(num / 2), result);
};

console.log(convertBinary(233, ""));


const makeSum =(num)=>{
  if(num==1){
    return num;
  }

  return num + makeSum(num-1)
}

console.log(makeSum(3));