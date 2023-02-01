/*
2. На вход подается строка вида “имя фамилия возраст”. Необходимо написать
регулярное выражение для данной строки. Если же строка подходит под
регулярное выражение, то вывести булевое true, в противном случае бросить
исключение и обработать
*/

str = "Johm Smith 23";

function isValid() {
  try {
    if(!/^[A-Z]+[a-z] + [A-Z]+[a-z] + [0-9]{1,2}$/gm){
        return true
    } else {
        return new Error('is not valid');

    }
  } catch (error) {
    return error.message;
  }
}

let r = isValid(str);
console.log(r);
