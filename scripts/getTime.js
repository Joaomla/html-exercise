function setTime()
{
	var today = new Date();
	document.getElementById("date").innerHTML = today.toLocaleTimeString();
}

setTime();
setInterval(setTime, 1000);	