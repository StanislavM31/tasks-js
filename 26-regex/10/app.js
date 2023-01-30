/*
10. Неопытный Junior запушил в GitHub html файл с комментариями. Team Lead не
оценил использование комментариев в ветке development и попросил их убрать.
Вырезая куски кода вы поняли, что их чересчур много. Необходимо написать
регулярное выражение, которое вырежет все комментарии из html разметки
<!-- -->
/^<!-- [a-zA-Z<>\/\._\-@\!\?\&\* 0-9]+ -->$/gm
*/
let str = `
<div>
<input type="text">
<!-- <div>eydye</div> -->
<p>test<span>!</span></p>
<!-- p -->
</div>
`;
function isValid(string) {

    try {
        if(!string.length){
            throw new Error('пустая строка');
        }
        let regexp = /^<!-- [a-zA-Z<>\/\._\-@\!\?\&\* 0-9]+ -->$/gm;
        let final = string.replaceAll(regexp,'');
        return final;
    } catch (error) {
        return error.message;
    }
}

let r = isValid(str);
console.log(r);