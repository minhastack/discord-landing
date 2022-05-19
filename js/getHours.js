function hour(){
    const time = new Date();
    const hour = time.getHours();
    let minutes = time.getMinutes();
    if(minutes == 0) minutes = "00";
    return `${hour}:${minutes}`;
}

document.querySelector('#message-hour').innerHTML = hour();
