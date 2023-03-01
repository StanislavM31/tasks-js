/*
2.(1). Классы Person и Customer. Напишите класс Person с атрибутами данных для
имени, адреса и телефонного номера человека. Затем напишите класс Customer
(Клиент), который является подклассом класса Person. Класс Customer должен
иметь поле для номера клиента и атрибут булевых данных,
указывающий, хочет ли клиент быть в списке рассылки или нет.
Продемонстрируйте экземпляр класса Customer в простой программе
*/

class Person {
  name;
  adress;
  phone;
  setName(n) {
    this.name = n;
  }
  setAdress(a) {
    this.adress = a;
  }
  setPhone(p) {
    this.phone = p;
  }
  getName() {
    return this.name;
  }
  getAdress() {
    return this.adress;
  }
  getPhone() {
    return this.phone;
  }
}
class Customer extends Person {
  idClient;
  bool;
  setIdClient(id) {
    this.idClient = id;
  }
  setBool(b){
    this.bool = b;
  }
  getIdClient = () => this.idClient;
  getBool = () => this.bool;
}

let customer = new Customer();
customer.setName('Gena');
customer.setAdress('Sennitsa');
customer.setPhone('+375291114471');
customer.setIdClient(111234);
customer.setBool(true);
console.log(customer.getName());
console.log(customer.getPhone());
console.log(customer.getAdress());
console.log(customer.getIdClient());
console.log(customer.getBool());