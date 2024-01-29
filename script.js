var billInput = document.getElementById('tipInput');
var enterButton = document.getElementById('enterButton');
var billAmount = billInput.value;
var fifteenDisplay = document.getElementById('fifteenSpace');
var eightteenDisplay = document.getElementById('eightteenSpace');
var twentyDisplay = document.getElementById('twentySpace');

function fifteenPercent() {
	fifteenDisplay.innerHTML = '15%: $' + billInput.value * 0.15;
}

function eightteenPercent() {
	eightteenDisplay.innerHTML = '18%: $' + billInput.value * 0.18;
}

function twentyPercent() {
	twentyDisplay.innerHTML = '20%: $' + billInput.value * 0.2;
}

enterButton.addEventListener('click', function () {
	fifteenPercent();
	eightteenPercent();
	twentyPercent();
});
