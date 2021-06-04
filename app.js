//<!-----#---created by michael ndula----#---->
const countdown = () => {
    const countdate =new Date('June 14, 2021 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countdate - now;

    //How time works
    const seconds = 1000;
    const minutes = seconds * 60;
    const hour = minutes * 60;
    const day = hour * 24;

    //calculaate the gap
    const textday = Math.floor(gap / day);
    const texthour = Math.floor((gap % day) / hour);
    const textminutes = Math.floor((gap % hour) / minutes);
    const textseconds = Math.floor((gap % minutes) / seconds);

    //update html content
    document.querySelector(".day").innerText = textday;
    document.querySelector(".hour").innerText = texthour;
    document.querySelector(".minutes").innerText = textminutes;
    document.querySelector(".seconds").innerText = textseconds;
};

setInterval(countdown, 1000);