/* //  This is a algorithm

// pheoudo code for this algoritm

/* 

[51,82,93,46,35,63,21,9, 4]

step-1: sort by asecending of decending order

step-2 find the middle index of this element
middleIndex = firstIndex - lastIndex/2

step-3 get the middle indexed element from this array and 
check if this element is targeted element or not and target element is small or big than  middle index. if small, then middle index will be the last index. if bigger then middle index will be the first index. and again running the loop while first index is small than last index.  

while(first index <= last index)

if middle indexid element would be targeted index element then return it. 

if middele index small to targeted index then
   lastIndex= middleIndex +1 

if middle index big to targeted index then 
   firstIndex = middleIndex +1
 


const binarySearch = (arr, targetElement) => {

    let firstIndex = 0
    let lastIndex = arr.length - 1;

    while (firstIndex <= lastIndex) {
        let middelIndex = Math.round((lastIndex + firstIndex) / 2);
        if (arr[middelIndex] === targetElement) {
            return middelIndex
        }

        if (arr[middelIndex] < targetElement) {
            firstIndex = middelIndex + 1
        }
        else {
            lastIndex = middelIndex - 1
        }

    }

}

const findedIndex = binarySearch([1, 2, 3, 4], 4);

// console.log(findedIndex);
 */

let arrOfObj =[]

for(let i=0; i < 10000; i++){
  arrOfObj[i]=i
}
// console.log(arrOfObj);





/* console.time('linearSerach')

const linearSerach = (arr, findedElement) => {
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]=== findedElement){
      return i;
    }
  }

};

const index2 = linearSerach(
  arrOfObj,
  900
);

console.log(index2);
console.timeEnd('linearSerach') */

console.time('binarySearch')
const binarySearch = (array, element) => {
  let firstIndex = 0;
  let lastIndex = array.length - 1;

  while (true) {
    const middleIndex = Math.round((firstIndex + lastIndex) / 2);
    if (array[middleIndex] === element) {
      return middleIndex;
    }

    if (element > array[middleIndex]) {
      firstIndex = middleIndex;
    } else {
      lastIndex = middleIndex - 1;
    }
  }
};

const index = binarySearch(
  arrOfObj,
  900
);

console.log(index);

console.timeEnd('binarySearch')
