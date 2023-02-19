/*
5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
если слова являются анаграммами. Добавить проверки на ввод.
*/

class Anagram {
  constructor(str) {
    this.str = str;
    this.isAnagramOrNot = this.isAnagram(str)
  }
  isAnagram(word) {
    /* this.str = str; */
    if (word.split("").reverse().join("") == word) {
      return true;
    } else {
      return false;
    }
  }
}
let word = prompt("введите анаграмму");
let anagram = new Anagram(word);
console.log(anagram);
console.log(anagram.isAnagramOrNot);
console.log(anagram.isAnagram(word));
