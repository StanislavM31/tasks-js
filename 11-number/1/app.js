/* {
  a: {
    b: {
      c: {
        d: null;
      }
    }
  }
} */

const string = "a.b.c.d";

function foo() {
  let string = str.split(".");
  console.log(string);
  let object = {};
  let l = string.length-1;

  let temp = {}
  
  for (let i = l; i >= 0; i--) {
    const element = string[i];
    console.log("element: ", element);
    console.log(object);
    

if(i==l){
    object[element]=null;
    temp = {object};
} else {

    object[element]=temp; //object.c = d: null
    temp = {object};
}

  }
}

foo();
console.log("object", object.a);
console.log("object", object.b);
console.log("object", object.c);
console.log("object", object.d);
/* const str='a.b.c.d'
{
}
{
a:{
b:{
c:{
d:null
}
}
}
} */


const str='a.b.c.d';


const result=str.split('.').reduceRight((acc,item)=>{
    return {[item]:acc}
},null)

console.log(result)