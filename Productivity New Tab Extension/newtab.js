var searchInput = document.getElementById("search");
var searchButton = document.getElementById("searchBtn");
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
var infoBtn = document.getElementById("setupProfileBtn");
infoBtn.addEventListener("click", () => {
    var name = prompt("What is your name?", "John Doe");
    alert("Oh! Hi, " + name + "! It is soooo nice to see you!");
    var savedInfo = localStorage.setItem("username", name);
});
var information = localStorage.getItem("username");
if (information) {
    document.getElementById("title").innerText = "Nice to see you, " + information + ".";
} else {
    document.getElementById("title").innerText = "Hello. Welcome to your Homepage";
}