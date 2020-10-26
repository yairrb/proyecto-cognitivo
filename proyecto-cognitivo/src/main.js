
document.addEventListener("DOMContentLoaded", function (event) {
    var result = [];
    var words = [];
    var gameGenerator = new GameGenerator();

    function generateGame() {
        result = gameGenerator.throwDices();
        var boxes = document.getElementsByTagName('h1');

        for (i = 0; i < boxes.length; i++) {
            boxes[i].innerText = result[i];
            boxes[i].addEventListener("click", function () {

                if (this.classList && this.classList.contains('selected-box')) {
                    this.classList.remove('selected-box');
                    words.pop();
                } else {
                    this.classList.add('selected-box');
                    words.push(this);
                }
                showWord();
            });

        }
    }
    //https://es.wikipedia.org/wiki/Frecuencia_de_aparici%C3%B3n_de_letras#:~:text=La%20E%20y%20la%20A,supera%20el%201%2C5%25)


    generateGame();


    //fancy-button
    var addWordButton = document.getElementsByClassName('fancy-button');

    function showWord() {
        let panel = document.getElementById("find-word");
        panel.innerText = "";
        panel.innerText = getWord();
    }
    
    function getWord() {
        let retString = "";
        for (let i = 0; i < words.length; i++) {
            retString = retString + words[i].innerText;
        }
        return retString;
    }

    function resetWord() {
        for (let i = 0; i < words.length; i++) {
            words[i].classList.remove('selected-box');
        }
        words = [];
        let panel = document.getElementById("find-word");
        panel.innerText = "";
    }

    addWordButton[0].addEventListener("click", function () {
        let divSpacer = document.createElement("div")
        divSpacer.classList.add("spacer-div")
        let spanWord = document.createElement("span");
        let removeButton = document.createElement("a");


        removeButton.innerText = "X";
        removeButton.classList.add('delete-btn');
        removeButton.addEventListener("click", function () {
            divSpacer.parentNode.removeChild(divSpacer);
        });

        let word = getWord();
        spanWord.innerText = word;
        spanWord.classList.add('marked-word');
        let listOfWords = document.getElementById('markers');
        divSpacer.appendChild(spanWord);
        divSpacer.appendChild(removeButton);
        listOfWords.append(divSpacer);
        resetWord();
    });


    let newGameButton = document.getElementById("new-game");
    newGameButton.addEventListener("click", function() {
        location.reload();
    })

});