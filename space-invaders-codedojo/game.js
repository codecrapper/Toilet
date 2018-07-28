
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

const drawMissile = () => {
	document.getElementById("missileContainer").innerHTML = "";
	for(let i = 0; i < missilesPos.length; i++) {
	document.getElementById("missileContainer").innerHTML += 
	`<div class='missile' style='left:${missilesPos[i].left+12}px; top:${missilesPos[i].top-25}px'></div>`;

	}
}


