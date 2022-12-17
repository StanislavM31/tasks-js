/*
Дана строка 'aaa bbb ccc'.
Вырежите из нее слово 'bbb'
 */

let a = "aaa bbb ccc";

if (isNaN(a)) {
  console.log(a.replaceAll(" bbb ", ""));
} else {
  console.log("error");
}

