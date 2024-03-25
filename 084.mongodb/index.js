const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Hschool')

const table = mongoose.model('students', {
    name: String, age: Number, email: String, phone: String
})

async function tasks() {
    /* await table.create(
        [{ "name": "Иван Иванов", "age": 23, "email": "ivan.ivanov@example.by", "phone": "+375 (29) 123-56-90" },
        { "name": "Мария Петрова", "age": 27, "email": "maria.petrova@example.ru", "phone": "+375 (29) 555-55-55" },
        { "name": "Алексей Сидоров", "age": 21, "email": "aleksey.sidorov@example.com", "phone": "+375 (29) 999-99-99" },
        { "name": "Елена Кузнецова", "age": 25, "email": "elena.kuz@example.by", "phone": "+375 (29) 777-77-77" },
        { "name": "Дарья Плешко", "age": 25, "email": "darya.pleshko@example.ru", "phone": "+375 (29) 111-11-11" },
        { "name": "Марина Иванова", "age": 21, "email": "marina.ivanova@example.com", "phone": "+375 (29) 345-67-89" },
        { "name": "Игорь Петров", "age": 24, "email": "igor.petrov@example.com", "phone": "+375 (29) 234-56-78" },
        { "name": "Александра Сидорова", "age": 22, "email": "alex.sid@example.com", "phone": "+375 (29) 678-90-12" },
        { "name": "Сергей Кузнецов", "age": 20, "email": "sergey.kuznetsov@example.com", "phone": "+375 (29) 456-78-90" },
        { "name": "Олег Николаев", "age": 23, "email": "oleg.nik@example.com", "phone": "+375 (29) 678-90-12" },
        { "name": "Екатерина Смирнова", "age": 25, "email": "kate.smir@example.com", "phone": "+375 (29) 234-56-78" },
        { "name": "Артем Федоров", "age": 19, "email": "artem.fedorov@example.ru", "phone": "+375 (29) 345-67-89" },
        { "name": "Мария Попова", "age": 26, "email": "maria.popova@example.by", "phone": "+375 (29) 789-01-23" }]) */

    //4. Отобразите коллекцию из всех студентов, где age > 20

    /* const data = await table.find({ age: { $gt: 20 } })
    console.log(data); */

    /* 5. Отобразите студентов из коллекции "students", где name "Елена Кузнецова"  */

    /*  const result = await table.find({name: "Елена Кузнецова"}) 
     console.log(result); */

    /*  7. Найдите документ в коллекции "students" по name "Елена Кузнецова" и обновите
    возраст на новое значение. */


    /*     await table.updateOne({ name: "Елена Кузнецова" }, { $set: { age: 19 } })
        const result = await table.find({ name: "Елена Кузнецова" })
        console.log(result) */


    /*    8. Удалите все документы из коллекции "students", которые имеют возраст менее 18
       лет.
   */
    /*   await table.deleteMany({ age: { $lt: 18 } })
      const result = await table.find();
      console.log(result); */

    /*     9. Удалите документ из коллекции "students" по любому уникальному
    идентификатору */
    /* 
        await table.deleteOne({ _id: '658c550c39804ffeb3016b5f' })
        const res = await table.find({name: 'Мария Иванова'});
        console.log(res); */

    /*  10. Обновить номер телефона студента "Иван Иванов" на "+375 (29) 555-55-55". */

    /*   await table.updateOne({ name: "Иван Иванов" }, { $set: { phone: '+375 (29) 555-55-55'} })
           const result = await table.find({ name: "Иван Иванов" })
           console.log(result) */

    /* 11. Отобразите всех студентов из коллекции "students" с возрастом от 20 до 25 лет. */

    /*   const res = await table.find(
          {
              $and: [{
                  age: { $lt: 25 }
  
              },
              {
                  age: { $gt: 20 }
              }]
          }
      )
      console.log(res)
  */

    /* 12. Вывести список студентов, чьи возрасты меньше 25 лет. */

    /*  const res = await table.find({
         age: { $lt: 25 }
     })
 
     console.log(res); */

    /*  13. Отобразите студента/-ов из коллекции "students" с age 23 и name “Иван Иванов” */

    /* const res = await table.find({
     $and:[
         {name: 'Иван Иванов'},
         {age: 23}
     ]
    })
 
    console.log(res); */

    /*  14. Отобразите всех студентов из коллекции "students" с любым возрастом помимо 20
  и 23 лет (nor) */

    /*   const res = await table.find({
          $nor: [
              {
                  age: 20
              }, {
                  age: 23
              }
          ]
      })
  
      console.log(res); */
    /* 
        15. Обновить почту студентки "Елена Кузнецова" на "elena.kuz@example.com". */

    /*  const res = await table.updateOne({
         name: "Елена Кузнецова"
     },
         {
             $set: {
                 email: "elena.kuz@example.com "
             }
         })
 console.log(res);*/


    /* Отобразите студентов с возрастом от 20 до 25 лет не включая 23. */

    /* const res  = await table.find({
        $and: [{age: {$gt: 20}}, {age: {$lt: 25}}, {age: {$ne:23}}]
    })
    
    console.log(res) */


    /* 15. Вывести список студентов, чьи имена начинаются на букву "А" . */

    /* const result = await table.find({
    name: {$regex: '/^А[А-Яа-я ]+$/gm'}
    })
    
    console.log(result)
    } */

    /* 16. Вывести список студентов, у которых номер телефона начинается на "+375 (29)". */

    /*  const data = await table.find({
         phone: {
             $regex: /^\+375 \(29\) [0-9\-]+$/gm
         }
     })
 
     console.log(data) */

    /*  17. Вывести список студентов, чьи электронные адреса содержат слово "example". */

    /* const data = await table.find({
     email: {
         $regex: /^[a-z\.\-\_A-Z0-9]+@example\.[a-z]+$/gm
     }
    })
 
    console.log(data) */

    /*  18. Установить возрасту 23 года всем студентам, чье имя начинается на букву "М". */

    /*   await table.updateMany({
          name: { $regex: /^М[А-Яа-я ]+$/gm }
      }, {
          $set: { age: 23 }
      })
     const res = await table.find({
      name: { $regex: /^М[А-Яа-я ]+$/gm }
     })
  
     console.log(res) */

    /*    19. Вывести список студентов, чьи имена начинаются на букву “А” и у которых номер
    телефона начинается на "+375 (29)". */

    /* const res = await table.find({
         $and: [{
             name: {
                 $regex: /^А[А-Яа-я ]+$/gm
             }
         },
         {
             phone: {
                 $regex: /^\+375 \(29\) [0-9\-]+$/gm
             }
 
         }]
     })
 
     console.log(res) */
    /* 
        20.Найдите всех студентов из коллекции "students", чьи адреса электронной почты
    заканчиваются на ".com */

    /* const res = await table.find({
        email: {
            $regex: /^[a-z\.\-\_A-Z0-9]+@[a-z]+\.com$/gm
        }
    })
    
    console.log(res); */

    /* 21. Отобразите количество студентов коллекции "students" */

    /*  const res = await table.find().countDocuments()
     console.log(res); */
    /* 
        22. Вывести список студентов, чьи возрасты меньше 25 лет в отсортированном
    порядке. */
    /* const res = await table.find({age: {$lt: 25}}).sort({age: 1})
    console.log(res);
    } */

    /* 23. Отобразите 5 студентов старше 20 лет. */
    /* const res = await table.find({ age: { $gt: 20 } }).limit(5).sort({ age: 1 })
    console.log(res);

*/
    /* 24.Отобразите студентов в диапазоне от 20 лет до 30 в отсортированном порядке. */

    /*  const res = await table.find(
         {
             $and: [
                 { age: { $gt: 20 } },
                 { age: { $lt: 30 } }
             ]
         }
     ).sort({age: 1})
 
     console.log(res) */

    /* 25. Отобразите количество студентов коллекции "students" где возраст от 20*/
    /* const res = await table.find(
        {age: {$gt: 20}}
    ).sort({age:1}).countDocuments()

    console.log(res); */

    /* 26. Найти самого молодого студента. */

    /*  const res = await table.find().sort({age: 1}).limit(1)
     console.log(res) */

    /*  27. Вывести количество студентов, чьи имена начинаются на букву “А”. */

    /* const res = await table.find({
        name: {
            $regex: /^А[А-Яа-я ]+$/gm
        }
    }).countDocuments()

    console.log(res) */

    /* 28.Найти количество студентов старше 25 лет. */

    /*   const res = await table.find(
          { age: { $gt: 20 } }
      ).sort({ age: 1 }).countDocuments()
  
  console.log(res) */

    /* 29. Вывести количество студентов, чьи электронные адреса содержат слово
    "example". */

    /*  const res = await table.find({
         email: {
             $regex: /^[a-z\.\-\_A-Z0-9]+@example\.[a-z]+$/gm
         }
     }).countDocuments()
 
     console.log(res) */

    /* 30.Найти самого старого студента. */

    /* const res = await table.find().sort({ age: -1}).limit(1)
    console.log(res) */

    /* 31. Найти количество студентов моложе 22 лет */
    /* const res = await table.find({
        age: {$lt: 22}
    }).countDocuments()

    console.log(res) */

    /*  32. Отобразите 3 студента старше 20 в отсортированном порядке. */

    /*  const res = await table.find({
         age: { $gt: 20 }
     }).countDocuments()
 
     console.log(res) */

    /* 33. Отобразите уникальные name в отсортированном порядке. */
    /* const res = await table.find().distinct("name").sort()
    console.log(res) */

    /* 34.Удалить номер телефона у студентов, чье имя начинается на букву "А".
 */
    /* const result = await table.find().updateMany(
        { name: { $regex: /^А[А-Яа-я ]+/gm } },
        { $unset: { phone: 1 } }
    );
    console.log(result) */

    /* 35. Удалить коллекцию */
    /* const res = await table.drop()
    console.log(res); */

}









tasks()