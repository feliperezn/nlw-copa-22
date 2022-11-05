function createGame(player1, hour, player2){
    return `
        <li>
            <img src="./assets/national-teams/${player1}.png" alt="Bandeira do(a) ${player1}">
            <strong>${hour}</strong>
            <img src="/assets/national-teams/${player2}.png" alt="Bandeira do(a) ${player2}">
        </li>
    `
}

let delay = -0.4;

function createCard(date, day, games) {
    delay = delay + 0.4
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
            ${games}
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML =
        createCard("24/11", "quinta", 
            createGame("switzerland", "07:00", "cameroon") +
            createGame("uruguay", "10:00", "south_korea") +
            createGame("portugal", "13:00", "ghana") +
            createGame("brazil", "16:00", "serbia")
        ) +
        createCard("28/11", "segunda",
            createGame("cameroon", "07:00", "serbia") +
            createGame("south_korea", "10:00", "ghana") +
            createGame("brazil", "13:00", "switzerland") +
            createGame("portugal", "16:00", "uruguay")
        ) +
        createCard("02/12", "sexta",
            createGame("south_korea", "07:00", "portugal") +
            createGame("ghana", "10:00", "uruguay") +
            createGame("serbia", "13:00", "switzerland") +
            createGame("cameroon", "16:00", "brazil")
        )