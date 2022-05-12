// // 3-4 event
// const title = document.querySelector("h1");

// function handleTitleCheck() {
//     const currentColor = h1.style.color;
//     let newColor;

//     title.style.color = "red";
//     if (currentColor === "red") {
//         newColor = "tomato";
//     } else {
//         newColor = "blue";
//     }

//     h1.styled.color = newColor;
// }
// function handleMouseEnter() {
//     title.innerText = "mouseenter다!";
//     title.style.color = "red";
// }
// function handleMouseLeave() {
//     title.innerText = "mouseLeave다!";
//     title.style.color = "blue";
// }
// function handleWindowResize() {
//     document.body.style.backgroundColor = "tomato";
// }
// function handleWindowCopy() {
//     alert("Copier!");
// }
// function handleWindowOnline() {
//     alert("Hello WIFI !");
// }
// function handleWindowOffline() {
//     alert("SOS no WIFI !");
// }

// title.addEventListener("click", handleTitleCheck);
// title.addEventListener("mouseover", handleMouseEnter);
// title.addEventListener("mouseleave", handleMouseLeave);

// window.addEventListener("resize", handleWindowResize);
// window.addEventListener("copy", handleWindowCopy);
// window.addEventListener("online", handleWindowOnline);
// window.addEventListener("offline", handleWindowOffline);

// 3-8
// const h1 = document.querySelector("h1");

// function handleTitleCheck() {
//     const clickedClass = "clicked";

//     h1.classList.toggle();
// }

// h1.addEventListener("click", handleTitleCheck);

// 4-1
const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

function onLoginBtnClick() {
    const value = loginInput.value;
    if (value === "") {
        alert("Please write your name");
    }
}

loginButton.addEventListener("click", onLoginBtnClick);
