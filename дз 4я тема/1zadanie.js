function generateRandomArray(count, n, m) {
    const result = [];
    const min = Math.min(n, m);
    const max = Math.max(n, m);
  
    for (let i = 0; i < count; i++) {
      const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
      result.push(randomNum);
    }
  
    return result;
  }
  
  const count = 5;
  const n = -10;
  const m = 10;
  const randomArray = generateRandomArray(count, n, m);
  
  console.log(randomArray);