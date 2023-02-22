/*
5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
если слова являются анаграммами. Добавить проверки на ввод.
*/

class Anagram{
  constructor(word){
    this.word = word;
  }
}
class Check{
  isAnagram(w){
    try{
      if(!w.length){
        throw new Error('пустая строка')
      }
      if(w.split('').reverse().join('')==w){
        return true
      } else {
        return false;
      }
    } catch(error){
      alert(error.message);
      return ['здесь ничего нет']
    }
  }
}
let word = prompt('enter the anagram');
let anagram = new Anagram(word);
console.log(anagram);
let check = new Check()
console.log(check.isAnagram(anagram.word));