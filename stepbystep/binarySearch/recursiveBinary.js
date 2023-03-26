const array = [12, 23, 45, 52, 62, 78];

const startIndex = 0;
const endIndex = array.length - 1;
const neededElement = 62;
let position = undefined;

const recursiveBinary = (start, end) => {
  const midIndex = Math.round((start + end) / 2);
  if(start> end){
    console.warn("No element found")
    return;
  }
  if (array[midIndex] === neededElement) {
    position = midIndex;
    return true;
  } else if (neededElement > array[midIndex]) {
    recursiveBinary(midIndex + 1, end);
  } else {
    recursiveBinary(start, midIndex - 1);
  }
};
recursiveBinary(startIndex, endIndex)
console.log(position);

