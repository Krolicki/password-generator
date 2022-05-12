const passwordText = document.querySelector(".passwordText");
const copyButton = document.querySelector(".copyButton");
const generateButton = document.querySelector(".generateButton");
const copied = document.querySelector(".copied");

generateButton.addEventListener("click",function(){
    passwordText.value = generate(8);
})

copyButton.addEventListener("click",function(){
    passwordText.select();
    passwordText.setSelectionRange(0, 99999);
    if(passwordText.value != "Click generate"){
        navigator.clipboard.writeText(passwordText.value);
        copied.classList.add("anim");
    }
})

function generate(num) {
    let pass = '';
    let source = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let big = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let small = 'abcdefghijklmnopqrstuvwxyz';
    let numbers = '0123456789';
    let special = '!@#$%^&*';
    for ( var i = 0; i < num; i++ ) {
        switch(i % 4){
            case 0:
                source = big;
                break;
            case 1:
                source = small;
                break;
            case 2:
                source = numbers;
                break;
            case 3:
                source = special;
                break;
            default:
                break; 
        }
        pass += source.charAt(Math.floor(Math.random() * source.length));
   }
   let arr = pass.split('');
   arr.sort(function() {
        return 0.5 - Math.random();
   });  
   pass = arr.join(''); 
   return pass;
}