/*
14. 4. Наследование. Работа с геттерами и сеттерами. Классы Person и Customer.
Напишите класс Person с атрибутами данных для имени, фамилии. Затем
напишите класс Customer, который является подклассом класса Person. Класс
Customer должен иметь поле телефонного номера человека. Продемонстрируйте
экземпляр класса Customer вызвав геттеры собственного класса и суперкласса
*/

class Person {
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setSurname(surname) {
    this.surname = surname;
  }
  setSurname() {
    return this.surname;
  }
}
class Customer extends Person {
    setPhone(phone) {
        this.phone = phone;
    }
    getPhone() {
        return this.phone;
    }
};
let customer = new Customer();
customer.setName("Иван");
customer.setSurname("Иванов");
customer.setPhone('+375297756871');
console.log(customer);
