let fruits = ['apple', 'banana', 'kiwi', 'orange'];

// 1)
fruits.shift();
fruits.pop();
fruits.push('pineapple');
fruits.unshift('strawberry');

// 2)
fruits.splice(2, 1, 'grape', 'orange', 'melon');

// 3)
let message = 'My favorite fruits are: ';
for (let i = 0; i < fruits.length; i++) {
  if (i === fruits.length - 1) {
    message += 'and ' + fruits[i] + '.';
  } else {
    message += fruits[i] + ', ';
  }
}
console.log(message);
