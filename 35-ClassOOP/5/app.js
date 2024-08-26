/*
5. Реализуйте класс Anagram (Анаграмма это слово или фраза , полученный путем
замены букв исходного слова или фразы). Создать функцию для вывода ряда true,
если слова являются анаграммами. Добавить проверки на ввод.
*/

class Anagramm {
  constructor(str) {
    this.string = str;
  }

  reversedString() {
    try {
      if (this.string) {
        if (typeof this.string === "number") {
          this.string = (this.string).toString();
        } //this.string = this.string.toString();
        console.log((this.string).split("").reverse().join("") === this.string);
      } else throw new Error("вы ничего не ввели");
    } catch (e) {
      console.log(e.message);
    }
  }
}

let anagram = new Anagramm(12345);
anagram.reversedString();

/* class Anagram{
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
console.log(check.isAnagram(anagram.word)); */
