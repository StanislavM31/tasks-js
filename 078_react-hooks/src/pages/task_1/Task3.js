/*
3. По нажатию на enter в input onKeyDown выявлять является ли введенное слово
палиндромом
*/

export default function Task3() {
  function keyDown(event) {
    if (event.key !== "Enter") return;

    if (
      event.target.value.split("").reverse().join("") === event.target.value
    ) {
      alert(`Это палиндром`);
    } else {
      alert(`Не Палиндром`);
    }
  }
  return (
    <>
      <p>Task#1.3</p>
      <input onKeyDown={keyDown}></input>;
      <p></p>
    </>
  );
}
