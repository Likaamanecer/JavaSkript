const arr = [];
const n = 5;
 
for (let i = 1; i < n + 1; i++) {
  arr.push(i);
}
 
for (let i = 0; i < n; i++) {
  const r = Math.floor(Math.random() * n);
  [arr[i], arr[r]] = [arr[r], arr[i]];
}
 
console.log(arr);
 
const element = 3;
for (let i = 0; i < n; i++) {
  if (arr[i] === element) {
    console.log(i);
    break;
  }
}