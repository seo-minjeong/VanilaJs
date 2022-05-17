// 변수선언
const a = 5;
let isNico = false;

console.log(a);
console.log(isNico);

// 13. Conditionals (조건문)
// typeof = 현재 값의 타입을 확인할 수 있음.
// parseInt = spring -> number로 변환.
const age = promt("How old are you?");

console.log(typeof "15", typeof parseInt("15"));

// 14. Conditionals par Two
// propmt = 사용자가 텍스트를 입력할 수 있도록 안내하는 대화상자.
const age2 = parseInt(prompt("How old are you?"));

console.log(isNan(age2));

if (isNan(age2) < 18) {
    console.log("Please write a number");
} else {
    console.log("Thank you for writing your age.");
}

// 15. Conditionals part Three
// && 는 둘 다 true야 반환이 됨.
// || 둘 중 하나만 true이면 반환이 됨.
if (isNan(age2)) {
    console.log("Please write a number");
} else if (age2 < 18) {
    console.log("You to young");
} else {
    console.log("You can drink");
}

// 2강 정리
// = 는 value를 할당하는것임.
// 하나만 true가 되면 됨.
// if ((a && b) || (c && d) || (x && w) {

// }

// 2-0 The Document Object
// 하단 코드를 콘솔에 치면 해당 타이틀이 변경된다.
// console.dir => object로 정보들이 나옴.
document.title = "Hello";

// 2-2 Elements
// getElementById -> Id 선택자를 리턴.
// querySelector -> 단 하나의 선택자를 리턴, css 선택자를 사용해서도 가져올 수 있음.
// querySelectorAll -> array를 반환해줌 , 전체 선택자를 리턴.

// 2-3
// 클릭 이벤트 기초.
const title = document.querySelector(".Hello");

function handleTitleCheck() {
    title.style.color = "red";
}

// 함수 뒤에 괄호를 쓰지 않는게 중요함.
title.addEventListener("click", handleTitleCheck);

// 3-4 event
// 빈 함수를 만든 후 항상 호출해주는것이 중요하다.
const eventTitle = document.querySelector(".Hello");

function handleTitleCheck() {
    eventTitle.style.color = "red";
}
function handleMouseEnter() {
    eventTitle.innerText = "mouseenter다!";
    eventTitle.style.color = "red";
}
function handleMouseLeave() {
    eventTitle.innerText = "mouseLeave다!";
    eventTitle.style.color = "blue";
}
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}
function handleWindowCopy() {
    alert("Copier!");
}
function handleWindowOnline() {
    alert("Hello WIFI !");
}
function handleWindowOffline() {
    alert("SOS no WIFI !");
}

eventTitle.addEventListener("click", handleTitleCheck);
eventTitle.addEventListener("mouseover", handleMouseEnter);
eventTitle.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("online", handleWindowOnline);
window.addEventListener("offline", handleWindowOffline);

// 3-7 CSS in javascript
function handleTitleClick() {
    // 이렇게 string을 변수를 저장해서 사용하면 더 간단하게 사용할 수 있음.
    const clickedClass = "clicked";

    h1.className = "active";

    // if문으로 클래스 이름을 변경.
    if (h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

//  3-8 CSS in javascript 2
// contains로 내가 클래스 리스트를 포함하고 있는지 확인.
if (h1.classList.contains(clickedClass)) {
    h1.classList.remove(clickedClass);
} else {
    h1.classList.add(clickedClass);
}

// 4-1 Form Submission
// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("#login-form input");
// const loginButton = loginForm.querySelector("button");

// function onLoginBtnClick() {
//     const username = loginInput.value;
//     if (username === "") {
//         alert("Please write your name");
//     } else if (username.length > 15) {
//         alert("Your name is too long");
//     }
// }

// 4-2 Events part two
// const loginForm2 = document.querySelector("#login-form");
// const loginInput2 = document.querySelector("#login-form input");

// function onLoginSubmit(event) {
//     // 어떤 event의 기본행동이든지 발생되지 않도록 막는거. (브라우저가 기본적으로 시행하는 동작)
//     event.preventDefault();
//     console.log(event);
// }

// function handleLinkClick(e) {
//     e.preventDefault();
//     console.log(e);
// }

// // 함수에 ()를 넣어줄시 한번만 실행함.
// loginForm2.addEventListener("submit", onLoginSubmit);

// // 4-4
// window.onload = function () {
//     const loginForm = document.querySelector("#login-form");
//     const loginInput = document.querySelector("#login-form input");
//     const greeting = document.querySelector("#greeting");

//     const HIDDEN_CLASSNAME = "hidden";

//     function onLoginSubmit(event) {
//         event.preventDefault();
//         loginForm.classList.add(HIDDEN_CLASSNAME);
//         const username = loginInput.value;
//         greeting.innerText = "Hello" + username;
//         // 위와 같은 동작을 수행
//         greeting.innerText = `Hello ${username}`;
//         loginForm.classList.remove(HIDDEN_CLASSNAME);
//         console.log(username);
//     }

//     loginForm.addEventListener("submit", onLoginSubmit);
// };

// 4-5 최종 코드
window.onload = function () {
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form input");
    const greeting = document.querySelector("#greeting");

    const HIDDEN_CLASSNAME = "hidden";

    function onLoginSubmit(event) {
        event.preventDefault();
        loginForm.classList.add(HIDDEN_CLASSNAME);
        const username = loginInput.value;
        paintGreetings(username);
    }

    function paintGreetings(username) {
        gretting.innerText = `Hello ${username}`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    }
    const savedUsername = localStorage.getItem(USERNAME_KEY);

    if (savedUsername === null) {
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
    } else {
        paintGreetings();
    }

    loginForm.addEventListener("submit", onLoginSubmit);
};

// 5-1 Timeouts and Dates
// 첫번째 인수는 내가 실행하고자 하는 것 ,
// 두번째 인수는 호출되는 함수 간격을 몇 ms로 할것인지 정함.
setInterval(sayHello, 5000);

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
// 중요! 매초마다 실행하기 때문에 실시간처럼 보이는것임.
getClock();
setInterval(getClock, 1000);

// 당장 실행하고 싶지않을때 setTimeout을 설정.
// 1초뒤에 getClock이라는 함수를 실행하겠다.
// setTimeout(getClock, 1000);

// padStart
// 문자열의 길이는 2가 되어야하고 , 길이가 2가 되지 않는다면 앞쪽에 "0"을 추가함.
const hours = String(date.getHours()).padStart(2, "0");

// 6-0 quotes
// math.round(1.1) 소수점을 선언해도 정수로 떨어짐.
// math.CEIL(1.5) 을 선언하면 2를 반환해줌.
// math.floor(1.5) 을 선언하면 1을 반환해줌.
// 배열에서 floor를 사용한 이유는 마지막 아이템을 반환받기 위해서

// 6-1 random image
// 랜덤이미지 출력
// 배열안에 이미지를 담아놓고 랜덤으로 출력되게끔 처리!
// bgImg라는 변수를 만들고 그 변수가 img 엘리먼트를 바디에 생성하게끔 처리.
const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// prepend는 맨 위로 오게함.
document.body.appendChild(bgImage);
