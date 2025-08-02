let input=document.getElementById("inputbox");
let buttons=document.querySelectorAll("button");
let string="";
let arr=Array.from(buttons);//create an array to store all buttons
arr.forEach(buttons=>{
    buttons.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            string=eval(string);//eval is inbuilt function which converts string to mathematical value
            input.value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML=='DEL'){
            string=string.substring(0,string.length-1);
            input.value=string;
        }
        else{
        string+=e.target.innerHTML;
        input.value=string;
        }



    })

})
