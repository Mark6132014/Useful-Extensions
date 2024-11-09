function go() {
    let input = document.getElementById("website");
    location.replace(input.value);
}
function copy() {
    let input = document.getElementById("copy");
    navigator.clipboard.writeText(input.value);
}
function addHTML() {
    document.body.innerHTML += document.getElementById("add").value;
}
function goToWebsite() {
    location.replace("https://itzgametime-vip.w3spaces.com");
}
function copyItzgametimeVip() {
    navigator.clipboard.writeText("🍕Itzgametime Vip");
}
function add() {
    let input = document.getElementById("addNewTabWebsite");
    window.open(input.value, "blank");
}
document.querySelector("#showWebsite").addEventListener("click", () => {
    document.getElementById("web").style.display = "block";
});
document.querySelector("#cursor").addEventListener("click", () => {
    document.body.style.cursor = `url("chrome-extension://${chrome.runtime.id}/cursor.png"), auto`;
});
document.querySelector("#web").addEventListener("click", () => {
    window.open("https://itzgametime-vip.w3spaces.com");
});
var i = 0;
function scroll() {
    if (i > 255) {
        setTimeout(() => {
            location.replace("#cursor");
        }, 2000);
    }
    else {
  i += 1;
  window.scrollTo(0, i);
  setTimeout(scroll, 10.3);
    }
}
scroll();
var gummies = document.querySelector(".header #gummy");
window.addEventListener("scroll", () => {
    let scrollH = window;
    gummies.style.right = `${scrollH.scrollY}px`;
});
document.querySelector("#download").addEventListener("click", () => {
    window.location = "https://download1528.mediafire.com/2nfzt7e3i4hgaERZS3NUAAcLi6xgG8P3TiCQlvQmE7KN8HnW6urFke-9dyKVr0BedArFRZ326nArRpIEQRNecUrhRfSxoVjMcZsHT-lpsqo9AJSPD_3WREAx4uIU3zjGTfjK6WJfn3DIounIPMATgMijoxAmKsVIhYOOfjVOhucx2g/a8i777d1sq7j4dn/3D+Pizza.png";
});
document.querySelector(".extensionName").innerHTML += " chrome-extension://" + chrome.runtime.id;