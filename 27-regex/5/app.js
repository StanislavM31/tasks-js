/*
5. На вход подается строка в виде url. Необходимо написать регулярное выражение
для данной строки. Если же строка подходит под регулярное выражение, то
вывести булевое true, в противном случае бросить исключение и обработать
*/
let str = 'http://goldbusinessnet.com/';
function check(string){
    try {
        if(!/^http:\/\/[a-z]+.[a-z]+\/$/gm.test(string)) throw new Error('не корректный url');

        return true;
    } catch (error) {
        error.message;
    }
}

console.log(check(str));