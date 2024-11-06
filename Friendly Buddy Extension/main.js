var BaseURL = "chrome-extension://" + chrome.runtime.id + "/";
var Emotions = [
    {
        name: "Neutral",
        image: "neutral.png",
        messages: [
            "Looks like a good website to me!",
            "Watcha doing on there?",
            "I am so happy to see you!",
            "Have fun!"
        ]
    },
    {
        name: "Sad",
        image: "sad.png",
        messages: [
            "Can you take care of me?",
            "I feel lonely.",
            "You touched my heart.",
            "Please comfort me."
        ]
    },
    {
        name: "Angry",
        image: "mad.png",
        messages: [
            "I am not in the mood!!!",
            "I had enough!",
            "I mean it!",
            "I want to bully you!",
            "Dork!"
        ]
    },
    {
        name: "Loved",
        image: "love.png",
        messages: [
            "I like you",
            "Can we be together?",
            "You touched my heart",
            "You are the best user ever!",
            "I feel comfortable with you.",
            "I like being with you."
        ]
    },
    {
        name: "Epic",
        image: "epic.png",
        messages: [
            "This is SO epic!",
            "This is the best website that you been to ever!",
            "I like that!",
            "That is so cool!"
        ]
    },
    {
        name: "Confused",
        image: "confused.png",
        messages: [
            "What?",
            "When?",
            "Where?",
            "Why?",
            "How?",
            "What are you doing?"
        ]
    }
];
function setup() {
    /* Setup the HTML elements for this to work */
    var CSS = document.createElement("style");
    CSS.id = "FriendlyBuddyCSS";
    CSS.innerHTML = `#emoji {
            position: fixed;
            bottom: 0;
            left: 0;
            border-radius: 50%;
            z-index: 999999999999999999999;
        }
        .messageDialog {
            position: fixed;
            bottom: 105px;
            left: 100px;
            background: rgb(224, 193, 93);
            color: black;
            font-family: Arial, Helvetica, sans-serif;
            border-radius: 5px;
            border-bottom-left-radius: 0;
            height: 100px;
            width: 300px;
            z-index: 999999999999999999999;
        }
        #talkBtn {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1000000000000000000000000;
        }
            #showHide {
            position: absolute;
            bottom: 0;
            right: 0;
            }`;
    var HTML_CreateImage = document.createElement("img");
    HTML_CreateImage.src = `${BaseURL}neutral.png`;
    HTML_CreateImage.id = "emoji";
    HTML_CreateImage.height = 100;
    HTML_CreateImage.width = 100;
    var HTML_MessageDialog = document.createElement("div");
    HTML_MessageDialog.className = "messageDialog";
    HTML_MessageDialog.style.display = "block";
    HTML_MessageDialog.innerHTML = `<small id="emotion">Neutral</small>
        <button id="talkBtn">Talk!</button>
        <p id="message">
            Lorem ipsum dolor sit amet.
        </p>`;
        /* Done with Setup */
        document.body.appendChild(CSS);
        document.body.appendChild(HTML_CreateImage);
        document.body.appendChild(HTML_MessageDialog);
        console.log("Setup is now finished... From Friendly Buddy Extension.");
}
function ChangeEmotion() {
    let current_emotion = Emotions[Math.floor(Math.random()*Emotions.length)];
    let current_emotionName = current_emotion.name;
    let current_emotionImage = current_emotion.image;
    let current_message = current_emotion.messages[Math.floor(Math.random()*current_emotion.messages.length)];
    /* Set it from our made elements */
    console.log(current_emotion);
    document.getElementById("emoji").src = BaseURL + current_emotionImage;
    document.querySelector("#emotion").innerHTML = current_emotionName;
    document.querySelector("#message").innerHTML = current_message;
    /* Event Listener to make it talk */
    /* Add JavaScript to it */
    document.getElementById("talkBtn").addEventListener("click", () => {
        var speech = new SpeechSynthesisUtterance();
        speech.text = document.getElementById("message").innerText;
        window.speechSynthesis.speak(speech);
    });
    document.getElementById("emoji").addEventListener("click", () => {
        if (document.querySelector(".messageDialog").style.display == "block") {
            document.querySelector(".messageDialog").style.display = "none";
        } else {
            document.querySelector(".messageDialog").style.display = "block";
        }
    });
}
var EmotionInterval;
setup();
setTimeout(() => {
    EmotionInterval = setInterval(ChangeEmotion, 15000); /* Runs for every 15 seconds */
}, 5000);