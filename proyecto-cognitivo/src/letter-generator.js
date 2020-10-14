var GameGenerator = function () {

    return {
        throwDices: throwDices
    }
   
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }



    function throwDices() {
        let myDices = [
            ["A", "E", "N", "S", "D", "O"],
            ["S", "D", "E", "O", "Ñ", "A"],
            ["O", "A", "I", "E", "A", "U"],
            ["E", "D", "Qu", "O", "H", "S"],
            ["A", "R", "L", "A", "E", "B"],
            ["N", "R", "I", "F", "C", "T"],
            ["L", "O", "E", "Z", "B", "N"],
            ["H", "X", "U", "I", "R", "E"],
            ["A", "I", "T", "G", "N", "U"],
            ["N", "L", "O", "J", "V", "S"],
            ["N", "E", "L", "S", "C", "O"],
            ["O", "E", "L", "P", "C", "S"],
            ["R", "A", "A", "M", "C", "E"],
            ["A", "E", "N", "S", "D", "O"],
            ["O", "S", "N", "E", "C", "A"],
            ["A", "E", "T", "P", "D", "O"]];
    
        console.log(myDices)

        shuffle(myDices);
        let game = [];
        for (let i = 0; i < 16; i++) {
            let ranIndex = getRandomInt(0, 5);
            var letter = myDices[i][ranIndex];
            game.push(letter);
        }

        return game;
    }

    /**
    * Shuffles array in place. ES6 version
    * @param {Array} a items An array containing the items.
    */
    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }


}