let n = 100;
let m = -50;
 
let min = Math.min(n, m);
let max = Math.max(n, m);
 
let maxim = max - min;
 
let number = Math.floor(Math.random() * maxim / 2) * 2 + 1;
 
console.log(number);