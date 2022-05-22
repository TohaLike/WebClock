window.addEventListener('load', mainDate);
function mainDate() {
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();
    let ampm = hour >= 12 ? 'PM' : 'AM';

    let dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    hour = hour % 12;
    hour = hour ? 12 : '12';
    hour = hour < 10 ? '0' + hour : hour;
    seconds = seconds < 10 ? '0'+ seconds : seconds;
    minute = minute < 10 ? '0' + minute : minute;
    
    document.querySelector('.clock-day').innerHTML = dayNames[day];
    document.querySelector('.clock-hour').innerHTML = hour;
    document.querySelector('.clock-minute').innerHTML = minute;
    document.querySelector('.clock-ampm').innerHTML = ampm;
    document.querySelector('.clock-seconds').innerHTML = seconds;

    setTimeout(mainDate, 200)
}

