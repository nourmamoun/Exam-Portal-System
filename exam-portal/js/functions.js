//randomise exam questions
function randomOrder(array) {
    return array.sort(() => Math.random() - 0.5);
}

//formatting time
function timeformat(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}