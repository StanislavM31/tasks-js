/*
3. На входе статичный массив строк. Ваша задача отфильтровать и отобразить на
странице в тег li только те строки, которые содержат знак @
*/

export default function Task3() {
  const arr = ["aaa", "bbb", "c@c", "@ddd"];

  return (<ul>
    {arr.filter((el) => el.includes("@"))}
    </ul>);
}
