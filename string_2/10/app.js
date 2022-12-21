/*
    Дана строка из 3 слов разделенных пробелом:
• Найдите количество символов в этой строке.
• Вырежите из нее 2 и 3 слова.
• Найдите индекс 2 подстроки
*/
let a = 'HTML JavaScript PHP';
console.log('фраза из трех слов: HTML JavaScript PHP');
let l = a.split(" ").join('').length;
console.log(`длина строки ${l}`);

console.log(a.slice(0, 4));

