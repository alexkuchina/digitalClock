function showTime() {
	var date = new Date();

	//console.log(date);
//variables that store seconds minutes and hours
	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	//adds zero in front of the minutes when they are less than 10
	if(minutes < 10) {
		minutes = '0' + minutes;
	}

	//adds zero to seconds when less than 10 
	seconds = seconds<10 ? '0' + seconds : seconds;

	ampm = hours<12 ? ' AM' : " PM";
	//converts military time 
	if(hours > 12) {
		hours = hours - 12;
	};
// string that will be showing on the screen
	var timeDisplay = hours + ":" + minutes + ":" + seconds + ampm

//variable that stores info of an html element the time will be added to
	var screen = document.getElementById('screen');
	screen.textContent = timeDisplay;

	
//updates time every second
setInterval(showTime, 1000);

}

//runs the time function when the page is loaded 
document.body.addEventListener('onload', showTime(), false);

































