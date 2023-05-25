function intro(){
    console.log("Welcome to the show!");
}

function selectorSwitch(choice){
    let selection;
    if (choice == 0){
        selection = "Rock";
    } else if (choice == 1){
        selection = "Paper";
    } else if (choice == 2){
        selection = "Scissors"
    } else{
        alert("You're a fucking idiot")
    }
    // console.log(selection);
    return selection;
}


function cpuLogic(){
    function cpuSelection(){
    let cpuChoice = Math.floor(Math.random() * 2);
    return cpuChoice;
    }
    let input = cpuSelection();
    // console.log(input);
    return(input);
}

function userPick(){
    console.log("Please choose. 0 = Rock. 1 = Paper. 2 = Scissors");
    let userChoice;
    userChoice = prompt("Please choose make your selection");
    return(userChoice);
}

function judge (userInput, cpuInput){
    let result = userInput;



    if (userInput == 0  && cpuInput == 1){
       result = console.log("Paper beats Rock, you lose");
    } else if (userInput == 1 && cpuInput == 2){
        result = console.log("Scissors beat Paper, you lose");
    } else if (userInput == 2 && cpuInput == 0){
        result = console.log("Rock beats Scissors, you lose");
    } else if (userInput == 0 && cpuInput == 2) {
        result = console.log("Rock beats Scissors, you win!");
    } else if (userInput == 1 && cpuInput == 0) {
        result = console.log("Paper beats Rock, you win!");
    } else if (userInput == 2 && cpuInput == 1) {
        result = console.log("Scissors beat Paper, you win!");
    } else{
        result = console.log("TIE?!");
    }

    return result;
}


function gameFrame(){

    intro();

    let userDude = userPick();
    let cpuDude = cpuLogic();
    console.log("User has selected " + selectorSwitch(userDude));
    console.log("CPU has selected " + selectorSwitch(cpuDude));
    judge(userDude, cpuDude);
    

}