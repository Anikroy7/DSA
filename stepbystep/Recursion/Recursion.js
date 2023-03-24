/* console.log("hello");

const apple = (x) => {
    console.log('apple', x);
    if(x<10){
        apple(x+1)
    }
};

apple(0) */

const factorial = (number) => {
    console.log('number', number);
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
};

console.log(factorial(5));