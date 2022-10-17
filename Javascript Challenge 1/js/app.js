let firstName = prompt("What's your name?");

// if(firstName === "Corné") {
//     alert(firstName.toUpperCase()) // in uppercase terug
// }// iets anders doen


// check of ik een naam krijg
if(firstName){

    // als dit false is, als dit true is
    if(parseInt(firstName)){
        alert('robot detected');
    }else {
        alert(firstName.toUpperCase()) // in uppercase terug
    }

}else{
    firstName = prompt("You didn't fill in a name, stooooopid.");
}


// geef de naam terug in uppercase

// check of daar geen cijfers in zitten
// als er wel cijfers in zitten, robotje // of zoon elon musk

// geen naam, opnieuw proberen