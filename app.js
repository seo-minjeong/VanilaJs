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
if ((a && b) || (c && d) || (x && w) {
    
}