/*
9. Дополнить класс Validator. Добавить метод isURL для проверки на url.
*/
let u = `https://habr.com`;

class Validator{
  constructor(url){
    this.url = url
    this.isURL = this.isURL()
  }

  isURL(){
    let reg = new RegExp(/^[a-z]{4,5}:\/\/[a-zA-Z]+\.[a-z]{1,3}$/gm);
    try{
        if(reg.test(this.url)){
            return true
        } else {
            throw new Error('не валидный URL!')
        }
    } catch(error){
        error.message;
    }
  }
}

let validator = new Validator('https://habr.com');
console.log(validator.isURL);

class UniValidator{
    isURL(url){
        let reg = new RegExp(/^[a-z]{4,5}:\/\/[a-zA-Z]+\.[a-z]{1,3}$/gm);
        try{
            if(reg.test(url)){
                return true
            } else {
                throw new Error('uniValidator: не валидный URL!')
            }
        } catch(error){
            error.message;
        }
      }
}
let other_url = `https://habr.com`;
let uniValidator = new UniValidator();
console.log(uniValidator.isURL(other_url));
