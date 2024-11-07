function updateURLInput(variable, optionName, filename) {
    if (variable == optionName) {
        document.getElementById("imageURL").value = `chrome-extension://${chrome.runtime.id}/${filename}`;
    }
}
function updateInformation() {
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var image = document.getElementById("images");
    document.getElementById("ProfileInfo").innerHTML = `
    Information:
    <br>
    Name: ${name}
    <br>
    Age: ${age}
    <br>
    Born at year: ${new Date().getFullYear() - age}
    <br>
    Profile Picture: ${image.value}
    <br>
    Note: If the birth year is wrong. It might be the year of being ${age} or ${parseInt(age) + 1} at that year.`;
    updateURLInput(image.value, "Neutral", "neutral.png");
    updateURLInput(image.value, "Sad", "sad.png");
    updateURLInput(image.value, "Angry", "mad.png");
    updateURLInput(image.value, "Loved with comfort", "love.png");
    updateURLInput(image.value, "Extension Icon", "icon.png");
    updateURLInput(image.value, "Epic", "epic.png");
    updateURLInput(image.value, "Confused", "confused.png");
}
function started() {
    console.log("Saving Information");
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var image = document.getElementById("imageURL").value;
    var userName = localStorage.setItem("username", name);
    var userAge = localStorage.setItem("age", age);
    var userPFP = localStorage.setItem("pfp", image);
    alert("Saved Information.");
    console.log("Saved information from localStorage.");
}
document.getElementById("completeSetup").addEventListener("click", started);
document.getElementById("setupBtn").addEventListener("click", () => {
    document.querySelector(".setupDialog").style.display = "block";
});
document.getElementById("editProfileBtn").addEventListener("click", () => {
    document.querySelector(".setupDialog").style.display = "block";
});
/* Get User Data */
var userInformationName = localStorage.getItem("username");
var userInformationAge = localStorage.getItem("age");
var userInformationPFP = localStorage.getItem("pfp");
if (userInformationName && userInformationAge && userInformationPFP) {
    document.querySelector(".setupNotification").style.display = "none";
    document.querySelector(".setupDialog").style.display = "none";
    document.getElementById("pfp").src = userInformationPFP;
    document.getElementById("greeting").innerText = "Hi, " + userInformationName + "!";
    document.getElementById("editProfileBtn").style.display = "block";
} else {
    document.querySelector(".setupNotification").style.display = "block";
    document.getElementById("editProfileBtn").style.display = "none";
}
setInterval(updateInformation, 1000);