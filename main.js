const playBtn = document.querySelector("#playBtn");
const diceOne = document.querySelector("#diceOne img");
const diceTwo = document.querySelector("#diceTwo img");
const total = document.querySelector("#sum");
const result = document.querySelector(".result img")
const roller = document.querySelector(".roller")
const sumDisplay = document.querySelector(".sum")
// const rollAgain = document.querySelector("#rollAgain")



const rollDice = () => Math.floor(Math.random() * 6) + 1;


const playGame = () => {

    let diceA = rollDice();
    let diceB = rollDice();
    let sum = diceA + diceB;

    diceOne.setAttribute("src", `./img${diceA}.png`);
    diceTwo.setAttribute("src", `./img${diceB}.png`);
    total.innerText = sum;
    if(sum == 11 || sum == 7){
        result.setAttribute("src" , "./winner logo.png")
    }
    else if(sum == 2 || sum == 3 || sum == 12){
        result.setAttribute("src", "./looser.png")
    }
    else{
        result.setAttribute("src", "./roll again.webp")
        // rollAgain.innerText = "Roll Again"
    }

    result.style.display = "block"
    roller.style.display = "inline"
    roller.style.display = "flex"
    sumDisplay.style.display = "inline"
    sumDisplay.style.display = "flex"
    roller.style.textAlign ="center"
    


    console.log(`Dice One: ${diceA}, Dice Two: ${diceB}, Total: ${sum}`);
};


playBtn.addEventListener("click", playGame);
