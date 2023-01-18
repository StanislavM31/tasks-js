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
    let pass_l = 8;
    let pass_symb = Math.floor(Math.random() * 10);
    let pswrd = '';
    return a=>{
        while(pswrd!=8){
            pswrd+=1;
        }
        return pswrd;
    }
}

let a = pasGenClousure();
console.log(a);