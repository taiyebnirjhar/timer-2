"use strict";
const countdown = () => {
    // time setter 
    const countTime = new Date(`March 9 2022 23:59:59`).getTime();
    const now = new Date().getTime();
    const gap = countTime - now;

    // time standerd 
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //calculate time 

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);


    // add value to ui
    document.querySelector('.day').innerHTML = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.minute').innerHTML = textMinute;
    document.querySelector('.second').innerHTML = textSecond;

    //change image 
    if (0 < gap && gap <= 129600000) {
        document.querySelector('#image').src = './times.jpg';
        document.querySelector('#hd2').innerHTML = `HURRY UP`;
    } else if (gap <= 0) {

        document.querySelector('#image').src = './timeOut.png';
        document.querySelector('#hd').innerHTML = `DID YOU COMPLETE THE JOB!!`;
        document.querySelector('#hd2').innerHTML = ``;
    }

}

countdown();
setInterval(countdown, 1000);