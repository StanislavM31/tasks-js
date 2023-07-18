const { sum, multi, sumOfArray, findProduct, uniqNumbers, amountField, doubledValues, isEvenArray, devideArray} = require("./app.js");

describe("набор тестов 1", () => {
  test("Succes", () => {
    const result = sum(2, 2);
    expect(result).toBe(4);
  });

  test("Succes", () => {
    const result = sum(2, "string");
    expect(result).toBe(`не число`);
  });
});

describe("набор тестов 2", ()=>{
    test("Успешно", ()=>{
        const result = multi(2,10);
        expect(result).toBe(20);
    })
    test("Успешно", ()=>{
        const result = multi(2,"sss");
        expect(result).toBe("не число")
    })
    test("Успешно", ()=>{
        const result = multi(2, 144n);
        expect(result).toBe(`неверный тип числа(bigInt)`);
    })

})

describe("набор тестов 3", ()=>{
    test("Success",()=>{
        const result = sumOfArray([10,20,30]);
        expect(result).toBe(60);
    })
    test("Success", ()=>{
        const result = sumOfArray("string123");
        expect(result).toBe("не массив");
    })
    test("Success", ()=>{
        const result = sumOfArray([]);
        expect(result).toBe('empty arr');
    })
    test("Success", ()=>{
        const result = sumOfArray([10,10,"string"]);
        expect(result).toBe('массив содержит строку');
    })
})
let arr = [
    { id: 1, title: 'Часы', count: 10, price: 500, producer: 'Германия' },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 , producer: 'Германия' },
    { id: 3, title: 'Моноблок', count: 6, price: 2200, producer: 'Германия' },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000, producer: 'Китай' },
    { id: 5, title: 'Планшет', count: 22, price: 2100, producer: 'Китай' },
    { id: 6, title: 'Телевизор', count: 4, price: 4100, producer: 'Германия' },
    { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
    ]
describe("набор тестов 4", () => {
    test("Succes", () => {
      const result = findProduct(arr);
      expect(result).toEqual(
        [
            { id: 2, title: 'Смартфон', count: 33, price: 1500 , producer: 'Германия' },
            { id: 7, title: 'Холодильник', count: 11, price: 2400, producer: 'Германия' }
        ]
      );
    })
    test("Success", ()=>{
      const result = findProduct('string');
      expect(result).toBe('not array');
    })
    test("Success", ()=>{
      const result = findProduct([]);
      expect(result).toBe('empty array');
    })
    test("Success", ()=>{
      const result = findProduct(arr);
      expect(result).toHaveLength(2);
    })
})
const arrayOfPhoneNumbers = [
  "+375331111111",
  "+375331111111",
  "+375441234567",
  "+375441234567",
  "+375297756871",
];

describe('набор тестов 5', ()=>{
  test("Success", ()=>{
    const result = uniqNumbers('stringNotArray');
    expect(result).toBe('not an array')
  })
  test("Success", ()=>{
    const result = uniqNumbers([]);
    expect(result).toBe('Empty array')
  })
  test("Success", ()=>{
    const result = uniqNumbers([
      "+375297756871",
      123
    ]);
    expect(result).toBe('не все элементы - строки')
  })
  test("Success", ()=>{
    const result = uniqNumbers([
      "+375297756871",
      "+37529775"
    ]);
    expect(result).toBe('не все элементы - phone numbers')
  })
  test("Success", ()=>{
    const result = uniqNumbers(arrayOfPhoneNumbers);
    expect(result).toEqual([
      "+375331111111",
      "+375441234567",
      "+375297756871",
    ]);
  })
})

describe('Набор тестов 6', ()=>{
  test("Success", ()=>{
    const result = amountField([1,2,3]);
    expect(result).toBe(`parameter is not an object`);
  })
  test("Success", ()=>{
    const result = amountField({});
    expect(result).toBe(`в обьекте нет полей`);
  })
  test("Success", ()=>{
    const result = amountField({ "a":1, "b":2});
    expect(result).toHaveLength(2);
  })

})

describe('Набор тестов 7', ()=>{
  test("Success", ()=>{
    const result = doubledValues("string");
    expect(result).toBe(`is not array`);
  })
  test("Success", ()=>{
    const result = doubledValues([]);
    expect(result).toBe(`empty array`);
  })
  test("Success", ()=>{
    const result = doubledValues([5,10,15]);
    expect(result).toEqual([10,20,30]);
  })
})

describe('Набор тестов 8', ()=>{
  test("Success", ()=>{
    const result = isEvenArray("string123");
    expect(result).toBe(`is not array`);
  })
  test("Success", ()=>{
    const result = isEvenArray([]);
    expect(result).toBe(`empty array`);
  })
  test("Success", ()=>{
    const result = isEvenArray([10,20,"string"]);
    expect(result).toBe(`array have a string!`);
  })
  test("Success",()=>{
    const result = isEvenArray([10,1,20,1,30,1,1]);
    expect(result).toEqual([10,20,30]);
})
})

describe('Набор тестов 9', ()=>{

  test("Success",()=>{
    const result = devideArray([1, 2, 3, 4, 5, 6], 1);
    expect(result).toEqual([[1], [2], [3], [4], [5], [6]]);
})
  test("Success",()=>{
    const result = devideArray([1, 2, 3, 4, 5, 6], 2);
    expect(result).toEqual([[1, 2], [3, 4], [5, 6]]);
})
  test("Success",()=>{
    const result = devideArray([1, 2, 3, 4, 5, 6], 3);
    expect(result).toEqual([[1, 2, 3], [4, 5, 6]]);
})
  test("Success",()=>{
    const result = devideArray([1, 2, 3, 4, 5, 6], 4);
    expect(result).toEqual([[1, 2, 3, 4], [5, 6]]);
})
  test("Success",()=>{
    const result = devideArray([1, 2, 3, 4, 5, 6], 5);
    expect(result).toEqual([[1, 2, 3, 4, 5], [6]]);
})
  test("Success",()=>{
    const result = devideArray([1, 2, 3, 4, 5, 6], 6);
    expect(result).toEqual([[1, 2, 3, 4, 5, 6]]);
})
})

