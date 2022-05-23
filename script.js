function SetTime(element) {
	this.element = element;
	this.fullFormat = true;
	this.element.addEventListener('click', () => {
		this.changeVersion();
	})
}

SetTime.prototype.render = function () {
	if (this.fullFormat) {
		return this.element.innerHTML = new Date().toTimeString().split(' ')[0];
	} else {
		return this.element.innerHTML = new Date().toTimeString().split(' ')[0].substring(0, 5);
	}
}

SetTime.prototype.changeVersion = function () {
	this.fullFormat = !this.fullFormat;
	this.element.classList.toggle('header__clock-small');
}

let firstClockOnPage = document.querySelector('.header__clock');
let firstResultOfClock = new SetTime(firstClockOnPage);
setInterval(() => firstResultOfClock.render(),);

let secondClockOnPage = document.querySelector('.header__clock-second');
let secondResultOfClock = new SetTime(secondClockOnPage);
setInterval(() => secondResultOfClock.render(), 1000);

