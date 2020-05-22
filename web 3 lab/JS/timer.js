var finish = new Date(2020, 6);

function NewTime() {
	var now = new Date();
	var year = new Date();
	var milli = finish - now;
	
	document.getElementById('year').innerHTML = year.getFullYear();
	out = Math.trunc(milli / 8.64e+7);
	document.getElementById('days').innerHTML = out;
	milli = milli - out * 8.64e+7;
	out = Math.trunc(milli / 3.6e+6);
	document.getElementById('hours').innerHTML = out;
	milli = milli - out * 3.6e+6;
	out = Math.trunc(milli / 60000)
	document.getElementById('minutes').innerHTML = out;
	milli = milli - out * 60000;
	out = Math.trunc(milli / 1000);
	document.getElementById('seconds').innerHTML = out;
}

setInterval(NewTime, 1000);