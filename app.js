// 3-4 event
const title = document.querySelector(".Hello");

function handleTitleCheck() {
    title.style.color = "red";
}
function handleMouseEnter() {
    title.innerText = "mouseenter다!";
    title.style.color = "red";
}
function handleMouseLeave() {
    title.innerText = "mouseLeave다!";
    title.style.color = "blue";
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

title.addEventListener("click", handleTitleCheck);
title.addEventListener("mouseover", handleMouseEnter);
title.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("online", handleWindowOnline);
window.addEventListener("offline", handleWindowOffline);
