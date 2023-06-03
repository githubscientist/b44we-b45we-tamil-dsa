// let numbers = [6, 3, 4, 1, 2, 5, 10, 21, 22];

// // sort method in the array <- in-place
// // numbers.sort();

// // ascending order ?
// // numbers.sort((a, b) => a-b);

// // descending order ?
// numbers.sort((a, b) => b-a);

// console.log(numbers);

// 2d sorting ?
let numbers = [[3, 23], [21, 4], [5, 6], [7, 3], [10, 15]];

// ascending order ? first element ?
// numbers.sort((a, b) => a[0] - b[0]);

// ascending order ? second element?
numbers.sort((a, b) => a[1] - b[1]);

console.log(numbers);

// let numbers = [[3, 23], [21, 4], [5, 6], [7, 3], [10, 15]];

// console.log(numbers[2][1]);