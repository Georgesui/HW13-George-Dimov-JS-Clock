// Обычный вариант
function SetTime(element) {
	this.element = element;
	this.fullFormat = true;

	this.render = function () {
		if (this.fullFormat) {
			this.element.innerHTML = new Date().toTimeString().split(' ')[0];
		}
		else {
			this.element.innerHTML = new Date().toTimeString().split(' ')[0].substring(0, 5);
		}
	}
	this.changeVersion = function () {
		this.fullFormat = !this.fullFormat;
		this.element.classList.toggle('header__clock-small');
	}

	this.element.addEventListener('click', () => {
		this.changeVersion();
	})
}


// Вариант через prototype - тоже работает.

// function SetTime(element) {
// 	this.element = element;
// 	this.fullFormat = true;
// 	this.element.addEventListener('click', () => {
// 		this.changeVersion();
// 	})
// }

// SetTime.prototype.render = function () {
// 	if (this.fullFormat) {
// 		this.element.innerHTML = new Date().toTimeString().split(' ')[0];
// 	}
// 	else {
// 		this.element.innerHTML = new Date().toTimeString().split(' ')[0].substring(0, 5);
// 	}
// }
// SetTime.prototype.changeVersion = function () {
// 	this.fullFormat = !this.fullFormat;
// 	this.element.classList.toggle('header__clock-small');
// }

let firstClockOnPage = document.querySelector('.header__clock');
let firstResultOfClock = new SetTime(firstClockOnPage);
setInterval(() => firstResultOfClock.render(),)

// Для решения пункта 4.5 был использован метод "changeVersion()" - его можно вызвать и он будет работать - 
// firstClockOnPage.changeVersion();

// 4.6 Чтобы убедиться, что функция-конструктор применима и универсальна.
// вызываем без задержки 1000 мс во избежании некрасивого перехода часов из одного формата в другой. Вторые вызвал с 
// задержкой/

let secondClockOnPage = document.querySelector('.header__clock-second');
let secondResultOfClock = new SetTime(secondClockOnPage);
setInterval(() => secondResultOfClock.render(), 1000);

