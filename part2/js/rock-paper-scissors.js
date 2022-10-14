function playGame() {
    var gameOptionList = ["rock", "paper", "scissors"];
    var userChoice = window.prompt("Choose rock, paper or scissors:");

    if (!gameOptionList.includes(userChoice)) {
        window.alert("Please enter correct option");
        return;
    }

    var computerChoiceIndex = Math.floor(Math.random() * Math.floor(3));
    var computerChoice = gameOptionList[computerChoiceIndex];
    if ((userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "scissors" && computerChoice === "paper")) {
        window.alert("Your win beacuse " +userChoice+ " beats " +computerChoice);
    } else if (computerChoice === userChoice) {
        window.alert("It was a tie, try next time.");
    } else {
        window.alert("Sorry you got beat by computer, beacuse " +computerChoice+ " beats " +userChoice);
    }
}
playGame();