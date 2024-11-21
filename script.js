let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.getElementById("user-score");
const compScorePara = document.getElementById("comp-score");

const genCompChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    // console.log("Game was draw");
    msg.innerText = "Draw Game";
    msg.style.backgroundColor = "blue"
}

const showWinner = (userWin,userChoice,CompChoice) => {
    if (userWin) {
        // console.log("you win!");
        msg.innerText = `you win! your ${userChoice} Beats ${CompChoice}`;
        msg.style.backgroundColor = "green"
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        // console.log("you lose");
        msg.innerText = `you lost. ${CompChoice} Beats Your ${userChoice}`;
        msg.style.backgroundColor = "red"
        compScore++;
        compScorePara.innerText = compScore;
    }
}


const playGame = (userChoice) => {
    // console.log("User Choice = ",userChoice);
    const CompChoice = genCompChoice();
    // console.log("comp choice = ", CompChoice);

    if (userChoice === CompChoice) {
        drawGame();
    }
    else{
        let userWin = true;
        if (userChoice === "rock") {
            userWin = CompChoice === "paper" ? false : true;     
        }
        else if (userChoice === "paper") {
            userWin = CompChoice === "scissors" ? false : true;
        }
        else{
            userWin = CompChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,CompChoice);
    }
}

choices.forEach((choice) =>{
    // console.log(choice);    
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("Choice was clicked",userChoice);
        playGame(userChoice)
    })
})