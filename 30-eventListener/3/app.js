/*
3. На вход подается строка из 2 и более слов. Необходимо все пробелы заменить на
“!”. Если же длина исходной строки не изменилась, вывести true, в противном
случае бросить исключение и обработать
*/
let str = 'hello, happy world';
function fixReplaceAll(string) {
  try {
    let result = string.replaceAll(/ /gm,`!`);
    return result;
  } catch (error) {
    return error.message;
  }
}
let r =fixReplaceAll(str);
console.log(r);