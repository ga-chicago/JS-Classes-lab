class person {
	constructor(name, age, occupation, hobby) {
		this.name = name
		this.age = age
		this.occupation = occupation
		this.hobby = hobby
	}
	eat() {
		console.log("nom-nom-nom");
	}
	work() {
		console.log("Hi-Ho");
	}
	sleep() {
		console.log("zzzzzzz");
	}
	play() {
		console.log("Boy do I love " + hobby + "-ing.");
	}
}

class pet {
	constructor(name, type, age, trick) {
		this.name = name
		this.type = type
		this.age = age
		this.trick = trick
	}
	eat() {
			console.log("nom-nom-nom");
		}
	trick() {
		console.log("Does " + trick +". Good job, " + name + "!");
	}
}

class boat {

	constructor(name, size, speed, engine) {
		this.name = name
		this.size = size
		this.speed = speed
		this.engine = engine
	}

	takeBoat(){
		console.log("woosh")
	}

}

class robot {
	constructor(name, type, speaks) {
		this.name = name
		this.type = type
		this.speaks = speaks
	}
	speaks() {

		if (speaks === true) {
			console.log("Greetings. I am " + name + ". How may I be of service?");
		} else if (speaks ===  false) {
			console.log("Bloopity-bleep-boop-squark!");
		};
	}
}

class computer {
	constructor(make, model, os, memory, sotrage) {
		this.make = make
		this.model = model
		this.os = os
		this.memory = memory
		this.storage = storage
	}
	turnOn () {
		if (os === "osx") {
			console.log("baaaaaaaaaaaahm");
		} else if (os === "Where do you want to go today?") {
			console.log("Bloopity-bleep-boop-squark!");
		};
	}
}

class dog {
	constructor(breed, color, size, friendly) {
		this.breed = breed
		this.color = color
		this.size = size
		this.friendly = friendly
	}
	goFetch() {
		if (friendly === true) {
			console.log(name + " brought back the ball.");
		} else if (friendly ===  false) {
			console.log("Grrrrrrrrr");
		};
	}
	speak(){
		if (size === "small") {
			console.log("Yip!");
		} else if (size === "medium") {
			console.log("Bark!");
		} else if (size === large) {
			console.log("BOOF!")
		}
	}
}
	
class painter {
	constructor(name, age, style, famousWork) {
		this.name = name
		this.age = age
		this.occupation ="painter"
		this.style = style
		this.famousWork = famousWork
	}
	curate() {
		console.log("And here we have " + famousWork + " from " + name + 
			", which was done in the " + style ".")
	}
}

class car { 
	constructor(make, model, year, color, speed) {
		this.make = make
		this.model = model
		this.year = year
		this.color = color
		this.speed = speed
	}
	drive() {
		if (speed <= 80) {
			console.log("Vroooooom");
		} else if (speed <= 120) {
			console.log("vrooomVroooooooooooooom!")
		} else {
			console.log("You got NOS in your veins!")
		}
	}


}

class laptop {
	constructor(make, model, screenSize, memory, storage, batteryLife, flex) {
		this.make = make
		this.model = model
		this.screenSize = screenSize
		this.memory = memory
		this.storage = storage
		this.flex = flex
	}
	shouldIBuy (){
		if (screensize >= 15 && memmory >= 8 && storage >= 500 && flex === true) {
			console.log("Buy it!");
		} else {
			console.log("Not worth your money.")
		}
	}
}

class humvee {
	constructor(year, color, grade) {
		this.year = year
		this.color = color
		this.grade = grade
	}

	shouldIBuy(atWar){
		if (atWar === true) {
			console.log("You should consider it");
		} else {
			console.log("You don't need a freakin' humvee!");
		}
	}
}

class smartPhone {
	constructor(manufacturer, os, storage){
		this manufacturer= manufacturer
		this os = os
		this storage =storage
	}
	ring (){
		console.log("ring-ring");
	}
	notification(){
		console.log("beep-beep");
	}
}

class baby {
	constructor(age, hair, eyes, diaperStatus) {
		this.age = age
		this.hair = hair
		this.eyes = eyes
		this.diaperStatus = diaperStatus
	}

	diaperChange() {
		if (diaperStatus === "full") {
			console.log("You better hold your nose.");
		} else {
			console.log("You're good for another couple hours");
		}
	}
}

class fireTruck {
	constructor(number, station, ladderHeight, sirenStatus) {
		this.number = number
		this.station = station
		this.ladderHeight = ladderHeight
		this.sirenStatus = false
	}
	
	emergency () {
		sirenStatus = true;
		console.log("wee-ooo-wee-ooo-wee-ooo");
	}
}

class bird {
	constructor(type, color, callType, canFly) {
		this.type = type
		this.color = color
		this.canFly = canFly
	}

	tweets() {
		if (callType === "tweet" || type = "Donald Trump"){
			console.log(type + " is tweeting.")
		}
	}
}



/// Harder

// 1.

class robot {
	constructor() {
		this.robots = []
	}
	makeRobot() {
		const newBot = this.robots.length;
		this.robots.push(newBot);
		return newBot;
	}
}

const ns5 = new robot();
ns5.makeRobot();
console.log(ns5.robots);

// 2. 

class computer {
	constructor(manufacturer, serialNumber) {
		this.manufacturer = manufacturer
		this.serialNumber = serialNumber
	}

}
class factory {
	constructor(manufacturer) {
		this.manufacturer = manufacturer
		this.computers = []
	}
	buildComputer(){
		const newPC = new computer(this.manufacturer, this.computers.length)
		this.computers.push(newPC);
		return newPC
	}
}

const dell =  new factory("dell")
dell.buildComputer();
dell.buildComputer();
console.log(dell.computers)







