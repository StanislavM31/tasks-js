/*
9. У вас есть кнопка. После каждого нажатия менять background.
*/

div = document.querySelector("div");
div.style = `
margin:auto auto;
height:100px;
width:80px;
padding: 20px 40px;
`;
div.style.border = `2px solid yellow`;
btn = document.querySelector("button");
btn.style = "background-color: yellow";
let b = true;
btn.addEventListener('click', function(){
    if(b){
        this.style = `background-color: yellow`;
        b=false;
    } else{
        this.style = `background-color: red`;
        b=true;
    }
})