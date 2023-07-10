class PasswordGenerator {
    array = "qwertyuiopasdfghjklzxcvbnm";
    pwd = '';
    temp = this.doParameter();
    doParameter() {
        let parameter;
        let bool = Math.floor(Math.random() * 2); // число || буква
        if (bool == 0) {
            parameter = Math.floor(Math.random() * 10);
        }
        else {
            //parameter = String.fromCharCode(65+(Math.floor(Math.random()*57)));
            parameter = this.array[(Math.floor(Math.random() * this.array.length))];
        }
        return parameter;
    }
    toGlue(parameter) {
        this.pwd += parameter;
    }
    generatePassword(length) {
        let count = 0;
        while (count <= length) {
            let temp = this.doParameter();
            this.toGlue(temp);
            count++;
        }
        return this.pwd;
    }
}
let passwordGenerator = new PasswordGenerator();
console.log(passwordGenerator.generatePassword(+prompt("введите длину безопасного пароля")));
