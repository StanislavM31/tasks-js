/*
1. На входе 2 статичные переменные пароля. По клику на кнопку необходимо
реализовать метод валидации. Написать регулярное выражение: пароль от 8
символов, содержит числа, буквы, !@#$%^&*+=
*/
function isValid(pwd1, pwd2) {
  try {
    if (pwd1 !== pwd2) throw new Error(`Пароли не совпадают`);
    if (pwd1.length < 8) throw new Error(`Пароль < 8 `);
    /* if (/[a-z]&[0-9]+$/gm.test(pwd1)) return `хороший пароль`; */
    alert('password ok')
  } catch (error) {
    return error.message;
  }
}

function Task6() {
  const pwd1 = "shark";
  const pwd2 = "shark";
  return (
    <div>
      <button onClick={isValid(pwd1,pwd2)}>Click</button>
    </div>
  );
}

export default Task6;
