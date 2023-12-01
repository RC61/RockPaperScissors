let userWins = 0;
let cpuWins = 0;
let count = 0;

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
        alert("You're an idiot")
    }
    // console.log(selection);
    return selection;
}

function coinFlip(){
    function flips(){
        let flip = Math.floor(Math.random() * 1);
        return flip;
    }
    let side = flips();
    return side;
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
    let userChoice;
    let isItTimeToWait = true;
    let button; 
    console.log("Please choose. 0 = Rock. 1 = Paper. 2 = Scissors");
    
    userChoice = prompt("Please choose make your selection"); //this code makes game functional
    /*
    // lets add some code up in here
    */
   
   
    // button = document.getElementById('gameButton');
    // button.addEventListener('click', userIntake());

    // console.log("you have selected " + userChoice)
    // console.log("you have selected " + button)
    return(userChoice);
}

// function userIntake(value){
//     return value;
// }
// return later if you ever figure out the event listener

function judge (userInput, cpuInput){
    let result = userInput;



    if (userInput == 0  && cpuInput == 1){
       result = console.log("CPU WINS");
       ++cpuWins;
    } else if (userInput == 1 && cpuInput == 2){
        result = console.log("CPU WINS");
        ++cpuWins;
    } else if (userInput == 2 && cpuInput == 0){
        result = console.log("CPU WINS");
        ++cpuWins;
    } else if (userInput == 0 && cpuInput == 2) {
        result = console.log("USER WINS");
        ++userWins;
    } else if (userInput == 1 && cpuInput == 0) {
        result = console.log("USER WINS");
        ++userWins;
    } else if (userInput == 2 && cpuInput == 1) {
        result = console.log("USER WINS");
        ++userWins;
    } else{
        result = console.log("TIE?!");
    }
    return result;
}


function gameFrame(){


    let userDude ; // awful variable name
    let cpuDude ; // see above line
    let flipDude; // why are you the way that you are?

    while(count < 5){
    // while(userWins < 5 || cpuWins < 5){

        console.log("It is game " + (count + 1));
        userDude = userPick();

        cpuDude = cpuLogic();

        console.log("User has selected " + selectorSwitch(userDude));
        console.log("CPU has selected " + selectorSwitch(cpuDude));
        judge(userDude, cpuDude);
    
        console.log("User wins: " + userWins);
        console.log("CPU wins: " + cpuWins);
        ++count;

    }

    console.log("the final score is... USER: " + userWins + " CPU: " + cpuWins);
    if(userWins > cpuWins){
        console.log("The user wins!");
    } else if(userWins < cpuWins){
        console.log("The CPU wins");
    } else if(userWins == cpuWins){
        console.log("There are no ties in the ThunderDome. Time to flip a coin");
        flipDude = coinFlip();
        if(flipDude == 0){
            console.log("tails, tough beans. CPU wins")
        } else if (flipDude == 1){
            console.log("Heads. Nice. User wins!")
        }
    } else{
        console.log("Damn. This thing is broken");
    }

    console.log("Thanks for playing!!");

}

function playGame(){
    intro();
    gameFrame();
}