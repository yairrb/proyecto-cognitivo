
document.addEventListener("DOMContentLoaded", function (event) {

var abecedario = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Qu","R","S","U","V","Y","Z"];
var vowels = "AEIOU"; 
var sarasa = ['E', 'A', 'O', 'S', 'R','N', 'I', 'D', 'L', 'C', 'T', 'U', 'M', 'P', 'B', 'G', 'V', 'Y', 'QU', 'H', 'F', 'Z', 'J','X']
var ArrayOfVowels = ["A", "E", "I", "O", "U"];
var vowelsPerGame = 0;
var result = [];
var words=[];

function generateGame() {

    //TODO: cambiar abecedario por un nombre decente
    for(let i = 0 ; i < 16 ; i++){
        let ranIndex = getRandomInt(0,23);
        var letter = sarasa [ranIndex];
        if ( i > 0 && result[i-1].includes(letter)  ){
            ranIndex = getRandomInt(0,23)
            letter = sarasa[ranIndex];
        }
        if (vowels.includes(letter) ){
            vowelsPerGame++;
        }
        result.push(letter);
    }

    //fix for lack of definition, replace later...
    while (vowelsPerGame < 8 ){
        console.warn("fixing game")
        let randIndex = getRandomInt(0,4);
        let randPosition = getRandomInt(0,15);
        let letterForReplacement = ArrayOfVowels
        [randIndex];
        if ( !vowels.includes(result[randPosition]) ){
            result[randPosition] = letterForReplacement;
            vowelsPerGame++;
            console.log(vowelsPerGame);
        }
    }
    console.log(result);
}
//https://es.wikipedia.org/wiki/Frecuencia_de_aparici%C3%B3n_de_letras#:~:text=La%20E%20y%20la%20A,supera%20el%201%2C5%25)


generateGame();

var boxes = document.getElementsByTagName('h1');
//fancy-button
var addWordButton = document.getElementsByClassName('fancy-button');


//TODO: refactor de la distribucion del codigo y 
//EVENTOS
for(i=0;i<boxes.length;i++) {
    boxes[i].innerText = result[i];
    boxes[i].addEventListener("click",function() {

        if (this.classList && this.classList.contains('selected-box')){
            this.classList.remove('selected-box');
            words.pop();
        }else{
            this.classList.add('selected-box');
            words.push(this);
        }
        showWord();
    });

}
function showWord(){
    let panel = document.getElementById("find-word");
    panel.innerText ="";
    panel.innerText =getWord();
}
function getWord(){
    let retString="";
    for ( let i = 0 ; i < words.length ; i++){
        retString = retString+words[i].innerText;
    }
    return retString;
}

function resetWord() {
    for ( let i = 0 ; i < words.length ; i++){
        words[i].classList.remove('selected-box');
    }
    words = [];
    let panel = document.getElementById("find-word");
    panel.innerText ="";
}




addWordButton[0].addEventListener("click", function() {
    let divSpacer = document.createElement("div")
    divSpacer.classList.add("spacer-div")
    let spanWord = document.createElement("span");
    let removeButton = document.createElement("a");


    removeButton.innerText = "X";
    removeButton.classList.add('delete-btn');
    removeButton.addEventListener("click", function() {
        divSpacer.parentNode.removeChild(divSpacer);
    });

    function removeElement( elem){
        alert(elem)
        elem.parentNode.removeChild(elem);
        //this.parentNode.removeChild(this);
    }
    

    let word = getWord();
    spanWord.innerText = word;
    spanWord.classList.add('marked-word');
    let listOfWords = document.getElementById('markers');
    divSpacer.appendChild(spanWord);
    divSpacer.appendChild(removeButton);
    listOfWords.append(divSpacer);
    resetWord();

    //listOfWords.append(spanWord);
    //listOfWords.append(removeButton);

    
});



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

});