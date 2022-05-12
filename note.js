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
