//array merging

const arr1 = [23, 56, 98, 74, 59, 42, 86];
const arr2 = [15, 75, 63, 14, 56];

let arr3 = [];

for (let i = 0; i <= arr1.length - 1; i++) {
  const element = arr1[i];
  arr3[i] = element;
}
for (let i = 0; i <= arr2.length - 1; i++) {
  arr3[arr1.length + i] = arr2[i];
}

console.log(arr3);

//array reverse

const exmpArray = [23, 65, 14, 52];
const reversedArray = []
let index = 0
for(i= exmpArray.length-1; i>=0; i--){
  reversedArray[index]= exmpArray[i]
  index++
}

console.log(reversedArray);
