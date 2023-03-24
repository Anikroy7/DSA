const array = [];
let currentIndex = 0;

const push = (value) => {
  array[currentIndex] = value;
  currentIndex++;
};

const pop = () => {
  if (currentIndex > 0) {
    array.length--;
    currentIndex--;
  }else{
    console.warn('Array is already empty!!')
  }
};


console.log(array);
