/* //Pheoudo code

/* 
--------------[10,2,5,4]----------

step-1: run a nested loop but second loop conditon will be the last index-i-1 

if current index is big then it would be last element to the last element


*/

/* const bubbleSort = (arr) => {
    for (i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

const result = bubbleSort([10, 2, 5, 4]);

console.log(result); */
const array = [9, 6, 8, 7, 45, 78, 98, 65, 6, 1, 2];

const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - (i + 1); j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
};

const result = bubbleSort(array);

console.log(result);

//assending order
for (let i = 0; i < array.length; i++) {
  for (j = i + 1; j < array.length; j++) {
    if (array[j] < array[i]) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

console.log("assending", array);

//decending order

// const array = [56, 20, 90, 47, 80, 3];

/* for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] < array[j]) {
      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
  }
}

console.log('decending',array); */

/* const newArray = [];

for (let i = 1000; i>= 0; i--) {
  if (i % 2 === 0) {
    newArray.push(i);
  }
}

console.log(newArray); */
