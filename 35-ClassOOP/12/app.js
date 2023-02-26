
/*
12. Реализуйте класс Hashtag. В него передается число n – количество элементов
массива. На основании числа формируется динамический массив из n элементов
внутри класса. Создать функцию doHashtag, заполняющую новый массив из
элементов, каждое значение которого имеет вид #name

 */

class Hashtag{
  constructor(n){
      this.n = n;
          let array = [];
          for (let i = 0; i < this.n; i++) {
              const element = Math.floor(Math.random()*100);
              array.push(element)
          }
          return array;
  }

}

let hashtag = new Hashtag(5);
console.log(hashtag);

