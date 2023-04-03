const array = [4, 3, 5, 2, 1];

for (let i = 1; i < array.length; i++) {
  const item = array[i];

  let j = i - 1;

  while (j >= 0 && item < array[j]) {
    array[j+1] = array[j];
    j--;
  }

  array[j+1]= item
}

console.log(array);
