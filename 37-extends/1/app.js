/*
1. Классы Employee и ProductionWorker.
Напишите класс Employee (Сотрудник), который содержит:
• имя сотрудника;
• номер сотрудника.
Затем напишите класс ProductionWorker (Рабочий), который является подклассом
класса Employee.
Класс ProductionWorker содержит:
• номер смены (целое число, к примеру, 1, 2 или 3);
• ставка почасовой оплаты труда.
Напишите методы получатели и методы-модификаторы для каждого класса.
После того как эти классы будут написаны, напишите программу, которая создает
объект класса ProductionWorker и предлагает пользователю ввести данные по
каждому атрибуту данных этого объекта. Сохраните данные в объекте и
примените в этом объекте методы получатели, чтобы получить эти данные и
вывести их на экран.
*/

class Employee {
  name ;
  id ;
  getName(){
    return this.name;
  }
  getId(){
    return this.id;
  }
  setName(n){
    this.name = n;
  }
  setId(i){
    this.id = i;
  }
}

class ProductionWorker extends Employee {
  shiftNumber ;
  perHour ;
  getShiftNumber(){
    return this.shiftNumber;
  }
  getPerHour(){
    return this.perHour;
  }
  setShiftNumber(s){
    this.shiftNumber = s;
  }
  setPerHour(ph){
    this.perHour = ph;
  }
  getAll(){
    return this.name+ ' '+ this.id+ ' ' + this.perHour+ ' ' + this.shiftNumber;
  }
}

let productionWorker = new ProductionWorker();
productionWorker.setName('Johny');
productionWorker.setId(777);
productionWorker.setShiftNumber('134ая смена');
productionWorker.setPerHour(100);

console.log(productionWorker.getName());
console.log(productionWorker.getId());
console.log(productionWorker.getShiftNumber());
console.log(productionWorker.getPerHour());
console.log(productionWorker.getAll());

