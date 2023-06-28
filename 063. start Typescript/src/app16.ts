/*
    16. На вход программе подается натуральное число n. Напишите программу, которая
    печатает звездный треугольник.
    4 –>****
    ***
    **
    *
*/

let number16:number = +prompt();

for (let i:number = 0; i < number16; i++) {
    let string:string = "";
    /* console.log(repeat(number16)); */
    for (let j:number = number16; i < j; j--) {
        string+="*";

    }
    console.log(string);
}


/* function repeat (n:number){
    string += string;
    if(n<1){
        return string;
    }
    repeat(n-1);

} */


/* function print(n:number){
    console.log("*");

    if(n<=1) {return 0}
    else {
        print(n-1);
}
}
print(number16);
*/
