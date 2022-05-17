const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 첫번째 인수는 내가 실행하고자 하는 것 ,
// 두번째 인수는 호출되는 함수 간격을 몇 ms로 할것인지 정함.
getClock();
setInterval(getClock, 1000);

// padStart
// 문자열의 길이는 2가 되어야하고 , 길이가 2가 되지 않는다면 앞쪽에 "0"을 추가함.
const hours = String(date.getHours()).padStart(2, "0");
