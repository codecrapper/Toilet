
//
const hero = {
	top: 700,
	left: 575
}

// const missile = {
// 	top: 684,
// 	left: 595
// }

const missilesPos = [];

const enemies = [
            { left: 200, top: 100 },
            { left: 300, top: 100 },
            { left: 400, top: 100 },
            { left: 500, top: 100 },
            { left: 600, top: 100 },
            { left: 700, top: 100 },
            { left: 800, top: 100 },
            { left: 900, top: 100 },
            { left: 200, top: 175 },
            { left: 300, top: 175 },
            { left: 400, top: 175 },
            { left: 500, top: 175 },
            { left: 600, top: 175 },
            { left: 700, top: 175 },
            { left: 800, top: 175 },
            { left: 900, top: 175 }
        ];

//document.querySelector(".missile").style.visibility = "hidden";

// LEFT and RIGHT keys moves the hero
document.onkeydown = function(event) {
	//console.log(event.keyCode);
	if(event.keyCode === 37) {
		console.log("LEFT");
		hero.left = hero.left - 10;
		moveHero();
	} else if(event.keyCode === 39) {
		console.log("RIGHT")
		hero.left += 10;
		moveHero();
	} else if(event.keyCode === 32) {
		let heroTopPos = hero.top;
		let heroLeftPos = hero.left;
		let missile = {
			top: heroTopPos,
			left: heroLeftPos
		}
		missilesPos.push(missile);
		console.log(missilesPos);

		// for(let i = 0; i < missilesPos.length; i++) {
		// 	document.querySelector(".missile").style.top = (missilesPos[i].top - 16) + "px";
		// 	document.querySelector(".missile").style.left = (missilesPos[i].left + 20) + "px";
		// }
		//document.querySelector(".missile").style.visibility = "visible";
		drawMissile();
	}
}

const moveHero = () => {
	document.getElementById("hero").style.left = hero.left + "px";
}

// const drawMissile = () => {
// 	document.getElementById("missileContainer").innerHTML = "";
// 	for(let i = 0; i < missilesPos.length; i++) {
// 		let createMissile = document.createElement("div");
// 		createMissile.className = "missile";
// 		// document.querySelector(".missile").style.top = (missilesPos[i].top - 16) + "px";
// 		// document.querySelector(".missile").style.left = (missilesPos[i].left + 20) + "px";
		
// 		createMissile.id = "missile" + i;
// 		document.querySelector(".missile").style.top = (missilesPos[i].top - 16) + "px";
// 		document.querySelector(".missile").style.left = (missilesPos[i].left + 20) + "px";
// 		//document.querySelector(".missile").style.visibility = "visible";
// 		document.getElementById("missileContainer").appendChild(createMissile);
// 	}
// }

function drawMissile() {
	document.getElementById("missileContainer").innerHTML = "";
	for(let i = 0; i < missilesPos.length; i++) {
	document.getElementById("missileContainer").innerHTML += 
	`<div class='missile' style='left:${missilesPos[i].left+12}px; top:${missilesPos[i].top-25}px'></div>`;

	}
}

function moveMissile() {
	for(let i = 0; i < missilesPos.length; i++) {
		missilesPos[i].top = missilesPos[i].top - 5;
	}
}

function drawEnemies() {
	document.getElementById("enemyContainer").innerHTML = "";
	for(let i = 0; i < enemies.length; i++) {
	document.getElementById("enemyContainer").innerHTML += 
	`<div class='enemy' style='left:${enemies[i].left}px; top:${enemies[i].top}px'></div>`;
	}
}

function moveEnemies() {
	for(let i = 0; i < enemies.length; i++) {
		enemies[i].top = enemies[i].top + 2;
	}
}

function gameLoop() {
	setTimeout(gameLoop, 100);
	moveMissile();
	drawMissile();
	drawEnemies();
	moveEnemies();
	
}

gameLoop();