//pheoudo code 
/* 
     [5,2,8,6,3]

step 1: decalre a min index
step 2: check 0 to all index of this array and find the smallest index to array set this index to min index
step 3: check if current value of i not equal to min index
 if not then change the postion between two element index

*/

const selection_sort = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        let min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j
            }
        }
        if (min_index !== i) {
            const temp = arr[i];
            arr[i] = arr[min_index];
            arr[min_index] = temp
        }
    }
    return arr
}

const result = selection_sort([10, 5, 2, 8, 7]);
console.log(result);


//assending order

const array = [56, 20, 90, 47, 80, 3];

for (let i = 0; i < array.length; i++) {
  for (j = i + 1; j < array.length; j++) {
    if (array[j] < array[i]) {
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

console.log('assending',array);

//decending order

// const array = [56, 20, 90, 47, 80, 3];

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] < array[j]) {
      const temp = array[j];
      array[j] = array[i];
      array[i] = temp;
    }
  }
}

console.log('decending',array);


