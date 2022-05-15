const passwordText = document.querySelector(".passwordText");
const copyButton = document.querySelector(".copyButton");
const generateButton = document.querySelector(".generateButton");
const copied = document.querySelector(".copied");
const numberChar = document.querySelector(".numberChar");
const slider = document.querySelector(".slider");

generateButton.addEventListener("click",function(){
    passwordText.value = generate(numberChar.value);
    copied.classList.remove("anim")
})

copyButton.addEventListener("click",function(){
    passwordText.select();
    passwordText.setSelectionRange(0, 99999);
    if(passwordText.value != "Click generate"){
        navigator.clipboard.writeText(passwordText.value);
        copied.classList.add("anim");
    }
})

slider.addEventListener("input", function(){
	numberChar.value = slider.value;
})

numberChar.addEventListener("change", function(){
	if(numberChar.value>18)
        numberChar.value = 18;
	else if(numberChar.value<4)
        numberChar.value = 4;
});

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