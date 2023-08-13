/*
4. На входе статичный массив строк. Ваша задача отобразить на странице все строки
массива, а также картинку. Каждая итерация будет возвращать
<div>
<p>el</p>
<img/>
</div>
*/
import img from "./assets/Group 11.png"

export default function Task4() {
  const arr = ["aaa", "bbb", "ccc"];
  return (
    <div>
      {arr.map((el) => (
        <div>
          <p>{el}</p>
          <img src={img} alt="nothing"></img>
        </div>
      ))}
    </div>
  );
}
