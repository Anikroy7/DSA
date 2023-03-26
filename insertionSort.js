/* 
 In this algorithm , we should compare 1 element with another element, who would small, if we want to sort we need replce position. 
 const array = [20, 56, 90, 47, 80, 3];
 in this array , 
 at first 20 compare to other elelment, is this case 
 3 is smaller than 20. so that 3 and 20 repace thier postion and cotinue with this process.
  
 we need start 2nd loop after sorted element. 

*/

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
