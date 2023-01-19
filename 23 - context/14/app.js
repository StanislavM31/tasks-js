/*
14. Напишите функцию, генерирующую надежный пароль. (Math.random)
*/

function pasgen() {
  let l = 8;
  let pass = "";
  for (let i = 0; i < l; i++) {
    let x = Math.floor(Math.random() * 10);
    pass += x;
  }
  return pass;
}

let pswrd = pasgen();
console.log(pswrd);


function pasGenClousure() {

    let password = "";
    return function () {
        let pass_l = 8;
        let pass_symb = Math.floor(Math.random() * 10);
        while (pswrd.length != pass_l) {
            password += pass_symb;
        }
        console.log(password);
        return password;
  }
}

let wrap = pasGenClousure();

console.log(wrap);
