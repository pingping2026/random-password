const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passWord1 = document.getElementById("password1")
let passWord2 = document.getElementById("password2")
function randomWord(){ 
    let result1 = ""
    let result2 = ""
    for (i = 0; i < 15 ;i++){
        result1 += characters[Math.floor(Math.random()*91)]
        result2 += characters[Math.floor(Math.random()*91)]
    } 
    passWord1.textContent = result1
    passWord2.textContent = result2
}

