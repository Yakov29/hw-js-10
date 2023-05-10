let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-ролл');
styles[1] = 'Класика';
let firstStyle = styles.shift();
styles.unshift('Реп', 'Реггі');
console.log(styles);
