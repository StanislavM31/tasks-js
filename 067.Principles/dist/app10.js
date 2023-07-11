class Pwd {
    showPwd() {
        let pwdRandom = "";
        for (let i = 0; i <= 8; i++) {
            pwdRandom += Math.floor(Math.random() * 9);
        }
        return pwdRandom;
    }
    ;
}
class Validation10 extends Pwd {
    showPwd() {
        /* console.log(super.showPwd()); */
        return super.showPwd();
    }
}
let pwd = new Pwd();
let validation10 = new Validation10();
console.log(pwd.showPwd());
console.log(validation10.showPwd());
