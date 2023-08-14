/*
4. У вас есть кнопка. После каждого нажатия менять ее цвет [‘red’, ‘white’, ‘blue’]
рандомно
*/

export default function Task4() {
    const arr = ["red", "white", "blue", "green"];
  function changeColor(event) {
    console.log(event.target.style.backgroundColor);
    event.target.style.backgroundColor = arr[Math.floor(Math.random()*4)];
  }
  return (
    <div>
      <p>Task#1.4</p>
      <button onClick={changeColor}>Поменять цвет</button>
    </div>
  );
}
