/*
1. Реализуйте класс Singer, который будет иметь следующие свойства: name,
surname. Также класс должен иметь метод getАutograph, который будет выводить
“{name} {surname), с наилучшими пожеланиями”.
 */

class Singer {

    constructor(n,s){
        this.name = n;
        this.surname = s;
    }
    getAutograph(){
        console.log(`${this.name} ${this.surname}, с наилучшими пожеланиями `); 
    }
}


let s = new Singer('Frenk', "Sinatra");
s.getAutograph()

