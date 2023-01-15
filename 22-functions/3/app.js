/*
3. Напишите функцию, которая принимает статичный массив строк. Необходимо
отфильтровать значения и оставить только те, где длина строк до 2 символов.
[“by”, “belarus”, “de”, “ru”, “germany”] -> [“by”, “de”, “ru”]
 */

let str = ['by', 'belarus', 'de', 'ru', 'germany'];

let filter = (f) =>{
  return f.filter(el=>{
    if(el.length==2){
      return true;
    }
  })
}



console.log(filter(str));
