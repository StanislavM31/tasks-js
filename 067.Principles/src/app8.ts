/*
8. Создайте класс PasswordGenerator, который будет иметь метод generatePassword,
позволяющий генерировать случайные безопасные пароли заданной длины.
Метод generatePassword принимает в качестве параметра длину пароля.
Использовать Generics
*/
interface abc {
    array: string;
}

class PasswordGenerator implements abc {
    array = "qwertyuiopasdfghjklzxcvbnm";
    pwd: string = '';
    temp = this.doParameter();

    doParameter(): (string | number) {

        let parameter:string | number;
        let bool = Math.floor(Math.random() * 2) // число || буква
        if (bool == 0) {
            parameter = Math.floor(Math.random() * 10);
        } else {
            //parameter = String.fromCharCode(65+(Math.floor(Math.random()*57)));
            parameter = this.array[(Math.floor(Math.random() * this.array.length))];
        }
        return parameter;
    }

    toGlue<T,K>(parameter:T|K):void{
        this.pwd += parameter;
    }

    generatePassword(length:number):string{
        let count = 0;
        while (count<=length){
            let temp = this.doParameter();
            this.toGlue(temp);
            count++;
        }
        return this.pwd
    }
}

let passwordGenerator = new PasswordGenerator();

console.log(passwordGenerator.generatePassword(+prompt("введите длину безопасного пароля")));




