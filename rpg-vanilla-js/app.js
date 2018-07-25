function Character(health, power) {
	this.health = health;
	this.power = power;
}

let player = new Character(100, 20);
let opponent = new Character(100, 20);
// let player = {
// 	health: 100,
// 	power: 20
// }

// let opponent = {
// 	health: 100, 
// 	power: 20
// }
let restartButton = document.getElementById("restart-button");
restartButton.hidden = true;

const attack = () => {
	let attackButton = document.getElementById("attack-button");
	let restartButton = document.getElementById("restart-button");
	let gameMessage = document.getElementById("game-message");

	let playerAttack = determineAttack(player.power);
	opponent.health = opponent.health - playerAttack;
	printToScreen();

	attackButton.disabled = true;
	gameMessage.innerText = "Opponent is about to strike!";

	if(isGameOver(opponent.health)) {
		endGame("YOU HAVE DEFEATED HIM!");
		return;
	} else {
		gameMessage.innerHTML = "You slapped him! He just lost "+playerAttack+"hp";
	}

	setTimeout(() => {
		let opponentAttack = determineAttack(opponent.power);
		player.health = player.health - opponentAttack;
		printToScreen();

		if(isGameOver(player.health)) {
			endGame("OPPONENT JUST BEAT YO ASS");
			return;
		} else {
			gameMessage.innerHTML = "Opponent strikes back for "+opponentAttack+"hp loss!";
		}

		attackButton.disabled = false;
	}, 500);
}

const determineAttack = (power) => {
	return Math.floor(Math.random() * (power + 1))
}

const isGameOver = (health) => {
	return health <= 0;
}

const endGame = (message) => {
	document.getElementById("game-message").innerText = message;
	document.getElementById("attack-button").hidden = true;
	document.getElementById("restart-button").hidden = false;
}

const restart = () => {
	opponent.health = 100;
	player.health = 100;
	document.getElementById("game-message").innerText = '';
	document.getElementById("attack-button").hidden = false;
	document.getElementById("restart-button").hidden = true;
	document.getElementById("attack-button").disabled = false;
	printToScreen();
}

const printToScreen = () => {
	document.getElementById("opponent-health").innerText = opponent.health;
	document.getElementById("player-health").innerText = player.health;
}

printToScreen();