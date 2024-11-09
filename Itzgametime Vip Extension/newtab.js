var searchInput = document.getElementById("search");
var searchButton = document.getElementById("searchBtn");
document.querySelector(".copy").addEventListener("click", () => {
    navigator.clipboard.writeText("🍕Itzgametime Vip");
});
function search() {
    let input = document.getElementById("search").value;
    if (input.startsWith("https://") || input.startsWith("http://")) {
        if (input == "https://" || input == "http://") {
            alert("URL does not exist with only the protocol. Try again.");
        } else {
            location.assign(input);
        }
    } else {
        location.assign(`https://www.google.com/search?q=${input}`);
    }
}
searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        search();
    }
});
searchButton.addEventListener("click", search);
/* Name */
var infoBtn = document.getElementById("infoBtn");
infoBtn.addEventListener("click", () => {
    var name = prompt("What is your name?", "John Doe");
    alert("Oh! Hi, " + name + "! It is soooo nice to see you!");
    var savedInfo = localStorage.setItem("username", name);
});
var information = localStorage.getItem("username");
if (information) {
    document.getElementById("description").innerText = "Nice to see you, " + information + ". I am 🍕Itzgametime Vip";
} else {
    document.getElementById("description").innerText = "🍕Itzgametime Vip is a great person to be with!";
}
var theme = new Audio('music.mp3');
theme.play();
theme.loop = true;