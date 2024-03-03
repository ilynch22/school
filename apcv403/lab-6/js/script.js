function test() {
    // calls subfunctions to count different aspects of the pasted text
    var wordCount = countWords();
    var characterCount = countCharacters();
    var spaceCount = countSpaces();
    document.getElementById("words").innerHTML= "Word Count: ".concat(wordCount);
    document.getElementById("characters").innerHTML= "Character Count: ".concat(characterCount);
    document.getElementById("spaces").innerHTML= "Space Count: ".concat(spaceCount);
}

function countWords() {
    const text = document.getElementById("toCount").value;
    
    const words = text.split(" ");
    var counter = 0;

    
    // Checks if the list is empty. For some reason no input was returning length of 1, this fixes that.
    if (JSON.stringify(words) == "[\"\"]") {
        return 0;
    }

    return words.length;
}

function countCharacters() {
    const text = document.getElementById("toCount").value;
    const characters = text.split("");
    return characters.length;
}

function countSpaces() {
    const text = document.getElementById("toCount").value;
    const characters = text.split("");
    var spaces = 0;
    for (var i = 0; i < characters.length; i++) {
        if (characters[i] == " ") {
            spaces += 1;
        }
    }
    
    return spaces;
}
