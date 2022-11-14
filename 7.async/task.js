class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.timerId = null;
	}

	addClock(atime, func, aid) {
		if (aid === undefined) {
			throw new Error("Параметр id не передан");
		}
		let flag = true;
		this.alarmCollection.forEach(item => {
			if (item.id === aid) {
				console.error("Будильник с таким id уже задан!");
				flag = false;
			}
		});
		if (flag) {
			const newObj = { id: aid, time: atime, callback: func };
			this.alarmCollection.push(newObj);
			console.log(`Будильник на ${newObj.time} задан`);
		}

	}

	removeClock(aid) {
		let flag = false;
		this.alarmCollection = this.alarmCollection.filter((ring) => {
			if (ring.id === aid) {
				flag = true;
				return false;
			} else {
				return true;
			}
		});
		return flag;
	}

	getCurrentFormattedTime() {
		let date = new Date();
		let currentHours = ("0" + date.getHours()).substr(-2);
		let currentMinutes = ("0" + date.getMinutes()).substr(-2);
		return currentHours + ":" + currentMinutes;
	}

	start() {
		const checkClock = (ring) => {
			if (ring.time === this.getCurrentFormattedTime()) {
				ring.callback();
			}
		};

		const rings = this.alarmCollection;
		if (!this.timerId) {
			this.timerId = setInterval(() => {
				this.alarmCollection.forEach(ring => {
					checkClock(ring);
				});
			}, 1000);
		}
	}

	stop() {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}

	printAlarms() {
		this.alarmCollection.forEach(ring => {
			console.log(ring.id + " " + ring.time);
		});
	}

	clearAlarms() {
		clearInterval(this.timerId);
		this.alarmCollection.splice(0, this.alarmCollection.length);
	}
}

function testCase() {
	let phoneAlarm = new AlarmClock();
	phoneAlarm.addClock("05:21", () => console.log("Вставай"), 1);
	phoneAlarm.addClock("05:22", () => {
		console.log("Давай вставай");
		phoneAlarm.removeClock(2);
	}, 2);
	phoneAlarm.addClock("05:22", () => console.log("Иди умывайся"));
	phoneAlarm.addClock("05:23", () => {
		console.log("Вставай а то проспишь");
		phoneAlarm.stop();
		phoneAlarm.clearAlarms();
		phoneAlarm.printAlarms();
	}, 3);
	phoneAlarm.addClock("05:25", () => console.log("Вставай, а то проспишь"), 1);
	phoneAlarm.printAlarms();
	phoneAlarm.start();
}