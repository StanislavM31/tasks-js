/*
5. На входе строка в виде пароля. Необходимо написать функцию на проверку, что
пароль является надежным (содержит хотя бы 1 букву в большом регистре, числа,
буквы, символ, длина не менее 8 символов)
 */

let str = "qwerty";

const checkUp = (c) => {
  if (c.toLowerCase() === c) {
    return "ненадежный пароль.(Добавьте букву в большом регистре)";
  } else {
    return "надежный пароль";
  }
};

const checkLength = (c) => {
  if (c.lenght > 7) {
    return "Надежный пароль";
  } else {
    return "ненадежный Пароль.(меньше 8ми символов) ";
  }
};
console.log(checkUp(str),'\n',checkLength(str));