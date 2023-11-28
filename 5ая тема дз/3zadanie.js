function arrSort(arr) {
    arr.sort((a, b) => a - b);
    console.log(arr);
    return arr;
  }

  const unsortedArray = [3, 1, 5, 2, 4];
  const sortedArray = arrSort(unsortedArray);