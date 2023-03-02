/*
2. Реализуйте класс Singer, который будет наследовать от класса Worker. Класс
Worker состоит из: свойства Name, свойства Surname, метода GetFullName(), с
помощью которого можно вывести одновременно имя и фамилию; Класс Singer
наследует Name, Surname, также состоит из свойств Years, Birth, Style и метода
GetMoreInfo(), который выводит информацию о певце: Years, Birth, Style.
Необходимо вызвать метод GetMoreInfo
*/

class Worker {
  /*   name;
  surname; */
  setName = (n) => {
    this.name = n;
  };
  setSurname = (s) => {
    this.surname = s;
  };
  getFullName() {
    let str = `${this.name} ${this.surname}`;
    return str;
  }
}

class Singer extends Worker {
  years;
  birth;
  style;
  getFullName() {
    let str = `the EX worker is ${this.name} ${this.surname}`;
    return str;
  }
  setYears = (y) => {
    this.years = y;
  };
  setBirth = (b) => {
    this.birth = b;
  };
  setStyle = (s) => {
    this.style = s;
  };
  getMoreInfo() {
    return `${this.name} ${this.surname} ${this.birth} ${this.years}  ${this.style} `;
  }
}

let singer = new Singer();
singer.setName("Frank");
singer.setSurname("Sinatra");
singer.setBirth(1915);
singer.setYears(1960);
singer.setStyle("jazz");
console.log(singer.getFullName());
console.log(singer.getMoreInfo());
/* ыещзауыьлвпдлаьпаьпдавл */
