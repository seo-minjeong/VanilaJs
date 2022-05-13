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

// 4-3
// const link = document.querySelector("a");

// function handleLinkClick(e) {
//     e.preventDefault();
//     alert("clicked!");
// }

// link.addEventListener("click", handleLinkClick);

// 4-4
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add("hidden");
    console.log(username);
}

loginForm.addEventListener("submit", onLoginSubmit);
