setTimeout(clock, 1000);

const hourHand = document.querySelector('.hour')
const minuteHand = document.querySelector('.min')
const secondHand = document.querySelector('.sec')



function clock() {
	const date = new Date()
	const seconds = date.getSeconds() / 60
	const minutes = (seconds + date.getMinutes()) / 60
	const hours = (minutes + date.getHours()) / 12
	rotation(hourHand, hours)
	rotation(minuteHand, minutes)
	rotation(secondHand, seconds)
}

function rotation(hand, deg) {
	hand.style.setProperty('--rotation', deg * 360)
}

clock()