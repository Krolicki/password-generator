const passwordText = document.querySelector(".passwordText");
const copyButton = document.querySelector(".copyButton");
const generateButton = document.querySelector(".generateButton");
const copied = document.querySelector(".copied");
const numberChar = document.querySelector(".numberChar");
const slider = document.querySelector(".slider");
const passwords = document.getElementById("passwords");
const numberPass = document.getElementById("numberPass");
const sliderPass = document.getElementById("sliderPass");

var numberOfPasswords = 1;

generateButton.addEventListener("click",function(){
    if(numberPass.value != numberOfPasswords){
        numberOfPasswords = numberPass.value;
        clear();
        more(numberPass.value-1);
    }
    copied.classList.remove("anim")
    fill();
})

copyButton.addEventListener("click",function(){
    let fields = document.querySelectorAll(".passwordText");
    let copyText = "";

    fields.forEach(function(el){
        el.select();
        el.setSelectionRange(0, 99999);
        if(el.value != "Click generate"){
            if(numberOfPasswords != 1){
                if(fields[numberOfPasswords -1] !== el)
                    copyText += el.value + "\n";
                else
                    copyText += el.value;
            }
            else
                copyText += el.value;
        }
    });

    navigator.clipboard.writeText(copyText);
    copied.classList.add("anim");
    setTimeout(function() {
        copied.classList.remove("anim");
    }, 3000);
})

slider.addEventListener("input", function(){
	numberChar.value = slider.value;
})

sliderPass.addEventListener("input", function(){
	numberPass.value = sliderPass.value;
})

numberChar.addEventListener("change", function(){
	if(numberChar.value>18)
        numberChar.value = 18;
	else if(numberChar.value<4)
        numberChar.value = 4;
    numberChar.value = Math.round(numberChar.value);
});

numberPass.addEventListener("change", function(){
	if(numberPass.value>30)
        numberPass.value = 30;
	else if(numberPass.value<1)
        numberPass.value = 1;
    numberPass.value = Math.round(numberPass.value);
});

function more(numb){
    for(let i=0; i<numb; i++){
        let add = document.createElement("input");
        add.setAttribute("type","text");
        add.setAttribute("class","passwordText passwordTextMore");
        add.setAttribute("id","p"+(i+2));
        add.setAttribute("value",generate(numberChar.value));
        add.setAttribute("disabled", "");
        passwords.appendChild(add);
    }
}

function fill(){
    let fields = document.querySelectorAll(".passwordText");

    fields.forEach(function(el){
        el.value = generate(numberChar.value);
    });

}

function clear(){
    let fields = document.querySelectorAll(".passwordTextMore");

    fields.forEach(function(el){
        el.remove();  
    });
}

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