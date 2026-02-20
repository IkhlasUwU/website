function fizzBuzz(limit)
{
    limit = prompt("Welcome to fizzbuzz\nPlease enter a number: \n\n(be careful entering high numbers, may crash your browser/pc)")

    if (limit != null)

    {
        const n = Number(limit);

        if (limit.trim() !== "" && Number.isFinite(n))
        {
            for (let i = 1; i <= limit; i++)
            {
                if (i % 15 === 0)
                {
                    console.log("fizzbuzz")
                }
                else if (i % 5 === 0)
                {
                    console.log("buzz")
                }
                else if (i % 3 === 0)
                {
                    console.log("fizz")
                }
                else
                {
                    console.log(i);
                }        
            }
            alert("Check console\n\nCtrl + Shift + I")
        }
    }
}



function rps(input)
{
    input = prompt("Please enter Rock, Paper, or Scissors.")

    let computer = Math.floor(Math.random() * 3);

    if (input != null)
    {
        input = input.trim().toLowerCase()

        switch (input)
        {
            case "rock":
                if (computer === 0)
                {alert("Computer chose rock too, it's a tie")}
                else if (computer === 1)
                {alert("Computer chose paper, you lose...")}
                else if (computer === 2)
                {alert("Computer chose scissors, you win!")}
                break;
            case "paper":
                if (computer === 0)
                {alert("Computer chose rock, you win!")}
                else if (computer === 1)
                {alert("Computer chose paper too, it's a tie")}
                else if (computer === 2)
                {alert("Computer chose scissors, you lose...")}
                break;
            case "scissors":
                if (computer === 0)
                {alert("Computer chose rock, you lose...")}
                else if (computer === 1)
                {alert("Computer chose paper, you win!")}
                else if (computer === 2)
                {alert("Computer chose scissors too, it's a tie")}
                break;
            default:
                alert("You entered something that's not rock, paper, or scissors. Try again.")
        }
    }
}



function ball8(){
    let input = prompt("Ask a yes or no question, get an answer")

    let ball = Math.floor(Math.random() * 16)

    
    if (input != "" && input != " " && input != null)
    {
        switch (ball)
        {
            case 0:
                alert("Yes. Definitely")
                break;
            case 1:
                alert("Perchance")
                break;
            case 2:
                alert("In another life, maybe")
                break;
            case 3:
                alert("Come back and ask later")
                break;
            case 4:
                alert("insaAllah")
                break;
            case 5:
                alert("No...")
                break;
            case 6:
                alert("It is certain")
                break;
            case 7:
                alert("As I see it, yes")
                break;
            case 8:
                alert("Without a doubt")
                break;
            case 9:
                alert("You can rely on it")
                break;
            case 10:
                alert("My sources say no")
                break;
            case 11:
                alert("If I were real, I would say no")
                break;
            case 12:
                alert("Outlook not looking good...")
                break;
            case 13:
                alert("Better not tell you now...")
                break;
            case 14:
                alert("I'm just a machine, I cannot predict that")
                break;
            case 15:
                alert("If my calculations are correct, yes")
                break;
            default:
                alert("If you see this, im dumb and something went wrong lol")
                break;
        }
    }
    else {alert("Please enter a valid question")}
}


function change()
{
    let random = Math.floor(Math.random() * 10)
    let random2 = Math.floor(Math.random() * 10)
    let random3 = Math.floor(Math.random() * 10)

    const button = document.querySelector("#changeButton")

    switch(random)
    {
        case 0:
            button.style.backgroundColor = 'lightblue'
            break;
        case 1:
            button.style.backgroundColor = 'orange'
            break;
        case 2:
            button.style.backgroundColor = 'blue'
            break;
        case 3:
            button.style.backgroundColor = 'black'
            break;
        case 4:
            button.style.backgroundColor = 'pink'
            break;
        case 5:
            button.style.backgroundColor = 'grey'
            break;
        case 6:
            button.style.backgroundColor = 'white'
            break;
        case 7:
            button.style.backgroundColor = 'purple'
            break;
        case 8:
            button.style.backgroundColor = 'red'
            break;
        case 9:
            button.style.backgroundColor = 'green'
            break;
        case 10:
            button.style.backgroundColor = 'yellow'
            break;
    }


    switch(random2)
    {
        case 0:
            button.style.color = 'lightblue'
            break;
        case 1:
            button.style.color = 'orange'
            break;
        case 2:
            button.style.color = 'blue'
            break;
        case 3:
            button.style.color = 'black'
            break;
        case 4:
            button.style.color = 'pink'
            break;
        case 5:
            button.style.color = 'grey'
            break;
        case 6:
            button.style.color = 'white'
            break;
        case 7:
            button.style.color = 'purple'
            break;
        case 8:
            button.style.color = 'red'
            break;
        case 9:
            button.style.color = 'green'
            break;
        case 10:
            button.style.color = 'yellow'
            break;
    }

    switch(random3)
    {
        case 0:
            button.style.borderColor = 'lightblue'
            break;
        case 1:
            button.style.borderColor = 'orange'
            break;
        case 2:
            button.style.borderColor = 'blue'
            break;
        case 3:
            button.style.borderColor = 'black'
            break;
        case 4:
            button.style.borderColor = 'pink'
            break;
        case 5:
            button.style.borderColor = 'grey'
            break;
        case 6:
            button.style.borderColor = 'white'
            break;
        case 7:
            button.style.borderColor = 'purple'
            break;
        case 8:
            button.style.borderColor = 'red'
            break;
        case 9:
            button.style.borderColor = 'green'
            break;
        case 10:
            button.style.borderColor = 'yellow'
            break;
    }
}

let num = 0

   function add()
    {
        const container = document.querySelector("#addBtnHere")


        const btn = document.createElement("button")
        btn.textContent = "another one"

        container.appendChild(btn)
    }

    
let wins = 0
let losses = 0
    
function jsGui(userChoice)
    {
        const choices = ["rock", "paper", "scissors"]
        const botChoice = choices[Math.floor(Math.random() * 3)]
        const winner = document.querySelector("#results")
        const winCount = document.querySelector("#wins")
        const lossCount = document.querySelector("#losses")
        let result = "";

    if (userChoice === botChoice) {
        result = `It's a tie!`;
    } else if (
        (userChoice === "rock" && botChoice === "scissors") ||
        (userChoice === "paper" && botChoice === "rock") ||
        (userChoice === "scissors" && botChoice === "paper")
    ) {
        result = `You win! ${userChoice} beats ${botChoice}.`;
        wins++
    } else {
        result = `You lose! ${botChoice} beats ${userChoice}.`;
        losses++
    }
    winner.textContent = result;
    winCount.textContent = `Wins: ${wins}`
    lossCount.textContent = `Losses: ${losses}`
    }

    //adding comment so I can commmit