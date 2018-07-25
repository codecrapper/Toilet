var SPEED = 1000;

var gameTimeData = {
	hour: 1,
	day: 1,
	month: 1,
	year: 1
};

var userData = {
	cash: 100,
	hourlyIncome: 1,
	inventory: {}
};

var incomeBoosts = [
	{
		title: "College Course",
		cost: 50,
		increase: 2
	},
	{
		title: "Watch a Youtube Stream",
		cost: 100,
		increase: 5
	},
	{
		title: "Goto Ted Talk",
		cost: 250,
		increase: 10
	},

];

// Income functions
const addHourlyIncome = () => {
	userData.cash += userData.hourlyIncome;
	constructIncome();
}

// Time functions
var gameTimer = setInterval(function() {
	addHour();
	addHourlyIncome();
}, SPEED);

const addHour = () => {
	constructTimeSection();
	if(gameTimeData.hour !== 24) {
		gameTimeData.hour++;
	} else {
		gameTimeData.hour = 1;
		addDay();
	}
}

const addDay = () => {
	if(gameTimeData.day !== 31) {
		gameTimeData.day++;
	} else {
		gameTimeData.day = 1;
		addMonth();
	}
	constructTimeSection();
}

const addMonth = () => {
	if(gameTimeData.month !== 12) {
		gameTimeData.month++; 
	} else {
		gameTimeData.month = 1;
		gameTimeData.year++;
	}
	constructTimeSection();
}

// construct functions
const constructTimeSection = () => {
	let timeSection = document.getElementById("game-time");
	let timeMessage = "Hour: " + gameTimeData.hour + " Day: " + gameTimeData.day + " Month: " + gameTimeData.month 
	+ " Year: " + gameTimeData.year;
	timeSection.innerText = timeMessage;
}

const constructIncome = () => {
	let incomeSection = document.getElementById("user-income");
	let incomeMessage = "Cash: $" + userData.cash + " Hourly Income: $" + userData.hourlyIncome;
	incomeSection.innerText = incomeMessage;
}

const constructBoosts = () => {
	let list = document.getElementById("powerup-options");
	for(let i = 0; i < incomeBoosts.length; i++) {
		let item = document.createElement("li");
		item.classList.add("mb-3")
		let createButton = document.createElement("button");
		createButton.setAttribute("type", "button");
		createButton.classList.add("btn-sm");
		createButton.classList.add("btn-outline-success");
		createButton.innerText = "Purchase";
				//createButton.classList.add("btn btn-success");
		item.innerText = incomeBoosts[i].title + ": $" + incomeBoosts[i].cost + " (Increase hourly income by $" + incomeBoosts[i].increase + ") ";
		createButton.onclick = function() {
			if(userData.cash >= incomeBoosts[i].cost) {
				userData.cash -= incomeBoosts[i].cost;
				userData.hourlyIncome += incomeBoosts[i].increase;
				constructIncome();
			} else {
				alert("you cant afford it mate");
			}
		}
		item.appendChild(createButton);
		list.appendChild(item);
	}
}

constructBoosts();

