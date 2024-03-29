/*
1. На вход подается строка в виде числа. Необходимо написать регулярное
выражение. Если строка состоит только из чисел, то вывести булевое true, в
противном случае бросить исключение и обработать
/^[0-9]+$/gm
*/

let str = "4e";
function isValid(string_) {
  try {
    if (!/^[0-9]+$/gm.test(string_)) {
      throw new Error("не подходит под регулярное выражение(not valid)");
    }
    return true;
  } catch (error) {
    return error.message;
  }
}

let result = isValid(str);
console.log(result);

