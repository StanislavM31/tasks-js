/*
1. На входе 2 статичные переменные пароля. По клику на кнопку необходимо
реализовать метод валидации. Написать регулярное выражение: пароль от 8
символов, содержит числа, буквы, !@#$%^&*+=
*/

function Task1() {
  const pwd1 = "shark123";
  const pwd2 = "shark123";

  function isValid() {
    try {
      if (pwd1 !== pwd2) throw new Error(`Пароли не совпадают`);
      if (pwd1.length < 8) throw new Error(`Пароль < 8 `);
      /* if (/[a-z]&[0-9]+$/gm.test(pwd1)) return `хороший пароль`; */
      alert(`password ok`);
    } catch (error) {
      console.log(error.message);;
    }
  }

  return (
    <div>
      <p>Task#1.1</p>
      <button onClick={isValid}>Click</button>
    </div>
  );
}

export default Task1;
