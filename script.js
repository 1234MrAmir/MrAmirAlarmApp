var audio = new Audio('alarmAudio.mp3');
var AlarmTime;

// play for audio
function playAlarm() {
    audio.play();
}

// alarm gif updating
function AlarmGif() {
    let gif = document.getElementById('alarm-clock-gif');
    gif.innerHTML = `<img src="gif/alarm-clock-gif.gif" alt="Computer man">`

}
// Update Alarm Time Information
function alarmUpdate() {
    let alarLineFirst = document.getElementById('alarm-information');
    let alarLineSecond = document.getElementById('alarm-information-2nd');
    setTimeout(() => {
        alarLineFirst.innerText = 'Mr Amir Your Alarm Has been Set';
    }, 200);

    setTimeout(() => {
        alarLineSecond.innerText = `Please Wait for ${AlarmTime} milisecond`
    }, 400);

}

// Accessing the button for setting the Alarm
let setAlramBtn = document.getElementById('setAlramBtn');
setAlramBtn.addEventListener('click', () => {
    let alarmClock = document.getElementById('alarmClock');
    setAlarm = new Date(alarmClock.value);
    newDate = new Date();
    AlarmTime = setAlarm - newDate;
    console.log('you have set an alarm');
    alarmUpdate();
    if (AlarmTime >= 0) {
        setTimeout(() => {
            console.log('your alarm is ringing');
            playAlarm();
            AlarmGif();
        }, AlarmTime);

    }
})

