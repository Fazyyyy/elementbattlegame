const gameContainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    option = document.querySelector(".option"),
    optionImages = document.querySelectorAll(".option_image");

let playerScore = 0;
let cpuScore = 0;

optionImages.forEach((image, index) => {
    image.addEventListener("click", (e) => {
        image.classList.add("active");
        optionImages.forEach((image2, index2) => {
            index !== index2 && image2.classList.remove("active");
        });

        let userChoice = e.target.querySelector("img").src;

        if (userChoice.includes("fireenergy.png")) {
            userResult.src = "Charizard.png";
        } else if (userChoice.includes("waterenergy.png")) {
            userResult.src = "Blastoise.png";
        } else if (userChoice.includes("grassenergy.png")) {
            userResult.src = "Venusaur.png";
        } else {
            userResult.src = userChoice;
        }

        let cpuChoiceIndex = Math.floor(Math.random() * 3);
        let cpuChoices = [
            "fireenergy.png",
            "waterenergy.png",
            "grassenergy.png"
        ];
        let cpuChoice = cpuChoices[cpuChoiceIndex];
        if (cpuChoice.includes("fireenergy.png")) {
            cpuResult.src = "Charizard.png";
        } else if (cpuChoice.includes("waterenergy.png")) {
            cpuResult.src = "Blastoise.png";
        } else if (cpuChoice.includes("grassenergy.png")) {
            cpuResult.src = "Venusaur.png";
        } else {
            cpuResult.src = cpuChoice;
        }

        // Determine the winner;
        if (
            (userChoice.includes("grassenergy.png") && cpuChoice.includes("fireenergy.png")) ||
            (userChoice.includes("fireenergy.png") && cpuChoice.includes("waterenergy.png")) ||
            (userChoice.includes("waterenergy.png") && cpuChoice.includes("grassenergy.png"))
        ) {
            option.textContent = "CPU wins!";
            cpuScore++;
        } else if (
            (userChoice.includes("fireenergy.png") && cpuChoice.includes("grassenergy.png")) ||
            (userChoice.includes("waterenergy.png") && cpuChoice.includes("fireenergy.png")) ||
            (userChoice.includes("grassenergy.png") && cpuChoice.includes("waterenergy.png"))
        ) {
            option.textContent = "You win!";
            playerScore++;
        } else {
            option.textContent = "It's a tie!";
        }


        updateScores();
    });
});
newGameBtn.addEventListener("click", () => {
    
    playerScore = 0;
    cpuScore = 0;

    
    updateScores();

    userResult.src = "pokeball.png";
    cpuResult.src = "pokeball.png";
});

function updateScores() {
    document.getElementById('playerScore').innerHTML = `${playerScore}`;
    document.getElementById('cpuScore').innerHTML = `${cpuScore}`;
}
