/*
1. Реализуйте класс Singer, который будет иметь следующие свойства: name,
surname. Также класс должен иметь метод getАutograph, который будет выводить
“{name} {surname), с наилучшими пожеланиями”.
 */

class Singer{
    constructor(n, sn){
        this.name = n;
        this.surname = sn;
    }

    getАutograph(){
        return `${this.name} ${this.surname}, с наилучшими пожеланиями`
    }
}

let singer = new Singer('John', 'Smith');
console.log(singer.getАutograph());