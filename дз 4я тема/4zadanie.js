let arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
let arr2 = [12, 44, 23, 5];
let combinedArray = arr1;

for (let i = 0; i < arr2.length; i++) {
  combinedArray.push(arr2[i]);
}

console.log(combinedArray);