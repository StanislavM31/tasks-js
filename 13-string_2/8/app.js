/*
Дана строка 'aaa bbb ccc'.
Вырежите из нее слово 'bbb'
 */

let a = "aaa bbb ccc";

if (isNaN(a)) {
  a.replaceAll("bbb", "");
  console.log(a.replaceAll("bbb", "").split(' ').join(''));
} else {
  console.log("error");
}

