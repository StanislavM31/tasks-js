/* 2. На входе статичный массив чисел. Ваша задача найти корень каждого числа и
отобразить на странице в виде h1
 */

export default function Task2(){
    const arr = [25, 125, 625];

    return <div>{arr.map((el=> <p>{Math.floor(Math.sqrt(el))}</p>))}</div>
}