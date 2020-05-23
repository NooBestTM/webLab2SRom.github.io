let now = document.querySelector(".time");

function ifLess10(time) {
    if (time < 10) {
        return `0${time}`;
    } else {
        return `${time}`;
    }
}

function outTime () { 
    let time = new Date();   
    now.innerHTML = `<p>
                        ${ifLess10(time.getHours())}:${ifLess10(time.getMinutes())}:${ifLess10(time.getSeconds())}
                    </p>`;
    delete time;
}

setInterval(outTime, 1000);