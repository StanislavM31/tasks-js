/*
3. По нажатию на enter в input onKeyDown выявлять является ли введенное слово
палиндромом
*/

export default function Task8() {
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
      <p></p>
      <input onKeyDown={keyDown}></input>;
      <p></p>
    </>
  );
}
