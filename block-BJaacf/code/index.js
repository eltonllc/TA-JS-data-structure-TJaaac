// 1. Create an array named numbers and store 5 number values in it
let arr = [2, 4, 6, 8, 10];
// 2. Calculate the sum of array items and print it to the console using console.log()
let arrSum = 0;

for (let num of arr) {
    arrSum += num;
}

console.log(arrSum);
// 3. Calculate the average of array items and print it to the console using console.log()
console.log(arrSum / arr.length);
// 4. Find the highest number in the array and print it to the console using console.log()
let highestNum = arr[0];

for (let num of arr) {
  highestNum = highestNum > num ? highestNum : num;
}
console.log(highestNum);
// 5. Find the lowest number in the array and print it to the console using console.log()
let lowestNum = arr[0];

for (let num of arr) {
  lowestNum = lowestNum < num ? lowestNum : num;
}

console.log(lowestNum);
// 6. Find the even numbers in the array and print them to the console using console.log()
for (let num of arr) {
  if (num % 2 == 0) console.log(num);
}
// 7. Find the odd numbers in the array and print them to the console using console.log()
for (let num of arr) {
  if (num % 2 != 0) console.log(num);
}
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for (let num of arr) {
  if (num % 5 == 0) console.log(num);
}
// 9. Log all the element of the array one by one
for (let num of arr) console.log(num);
// 10. Find all the number in the array that is divisible by 3
for (let num of arr) {
  if (num % 3 == 0) console.log(num);
}