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
}

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
	let incomeMessage = "Cash: $" + userData.cash;
	incomeSection.innerText = incomeMessage;
}


