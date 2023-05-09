// 1)
let arr1 = [1, 2, 3];
arr1.push(4, 5, 6);

// 2)
let arr2 = [1, 2, 3];
arr2.unshift(4, 5, 6);

// 3)
let arr3 = ['js', 'css', 'jq'];
console.log(arr3[0]); // 'js'

// 4)
let arr4 = ['js', 'css', 'jq'];
console.log(arr4[arr4.length - 1]); // 'jq'

// 5)
let arr5 = [1, 2, 3, 4, 5];
let newArr5 = arr5.slice(0, 3);

// 6)
let arr6 = [1, 2, 3, 4, 5];
let newArr6 = arr6.slice(3);
