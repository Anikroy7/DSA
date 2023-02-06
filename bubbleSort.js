//Pheoudo code

/* 
--------------[10,2,5,4]----------

step-1: run a nested loop but second loop conditon will be the last index-i-1 

if current index is big then it would be last element to the last element


*/

const bubbleSort = (arr) => {
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

console.log(result);