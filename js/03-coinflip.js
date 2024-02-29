
let coinFlip= math.round(math.round())
let choice= prompt("Select Heads or Tails:")
let flipResult

if (coinFlip <= 1000){
    flipResult= "H"
} else {
    flipResult="T"
}

if (choice === "Heads" && flipResult=== "H") {
    document.write("The flip was heads and you select heads... You win!")
} else if (choice === "Heads" && flipResult=== "T") {
    document.write("The flip was heads but you chose tails... You lose!")
} else if (choice === "Tails" && flipResult=== "H") {
    document.write("The flip was tails but you chose heads... You lose!")
} else if (choice === "Tails" && flipResult === "H") {
    document.write("The flip was tails and you select tails... You win!")
}

