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
        ],
        options: {
            option1: "Just looking at some interesting things at this website.",
            option2: "I am so entertained."
        }
    },
    {
        name: "Sad",
        image: "sad.png",
        messages: [
            "Can you take care of me?",
            "I feel lonely.",
            "You touched my heart.",
            "Please comfort me."
        ],
        options: {
            option1: "I will take care of you.",
            option2: "You'll feel better sometime."
        }
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
        ],
        options: {
            option1: "Hey! Apologize to me please",
            option2: "Sorry"
        }
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
        ],
        options: {
            option1: "Sure! We can hang out a little.",
            option2: "Let me think about it."
        }
    },
    {
        name: "Epic",
        image: "epic.png",
        messages: [
            "This is SO epic!",
            "This is the best website that you been to ever!",
            "I like that!",
            "That is so cool!"
        ],
        options: {
            option1: "I am glad that you like it!",
            option2: "About what?"
        }
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
        ],
        options: {
            option1: "What are you talking about?",
            option2: "What do you mean? I am just looking at this page."
        }
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
            width: 300px;
            z-index: 999999999999999999999;
        }
        #talkBtn {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 1000000000000000000000000;
            background: lightgrey;
            color: black;
            border: 1px solid white;
            border-radius: 8px;
        }
            #sendMsg {
            background: lightgrey;
            color: black;
            border: 1px solid white;
            border-radius: 8px;
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
        </p>
        <br>
        <div class="MessagingOptions">
        <input id="option1" type="radio" name="options">
        <label for="option1" id="option1Label"></label>
        <br>
        <input id="option2" type="radio" name="options">
        <label for="option2" id="option2Label"></label>
        <br>
        <input id="optionOther" type="radio" name="options">
        <label for="optionOther" id="optionOtherLabel">Other</label>
        </div>
        <hr>
        <input id="chatInput" placeholder="Message your buddy..." size="38">
        <center><button id="sendMsg">Send Message</button></center>`;
        /* Done with Setup */
        document.body.appendChild(CSS);
        document.body.appendChild(HTML_CreateImage);
        document.body.appendChild(HTML_MessageDialog);
        console.log("Setup is now finished... From Friendly Buddy Extension.");
        /* Event Listener to make it talk */
    /* Add JavaScript to it */
    var speech = new SpeechSynthesisUtterance();
    document.getElementById("talkBtn").addEventListener("click", () => {
        if (window.speechSynthesis.speaking == true) {
            window.speechSynthesis.cancel();
        } else {
            speech.text = document.getElementById("message").innerText;
            window.speechSynthesis.speak(speech);
        }
    });
    document.getElementById("emoji").addEventListener("click", () => {
        if (document.querySelector(".messageDialog").style.display == "block") {
            document.querySelector(".messageDialog").style.display = "none";
        } else {
            document.querySelector(".messageDialog").style.display = "block";
        }
    });
    document.getElementById("sendMsg").addEventListener("click", () => {
        let Label3 = document.getElementById("optionOtherLabel");
        Label3.innerText = document.getElementById("chatInput").value;
        let Radio3 = document.getElementById("optionOther");
        Radio3.checked = true;
    });
}
function ChangeEmotion() {
    let current_emotion = Emotions[Math.floor(Math.random()*Emotions.length)];
    let current_emotionName = current_emotion.name;
    let current_emotionImage = current_emotion.image;
    let current_message = current_emotion.messages[Math.floor(Math.random()*current_emotion.messages.length)];
    let current_option1 = current_emotion.options.option1;
    let current_option2 = current_emotion.options.option2;
    /* Set it from our made elements */
    console.log(current_emotion);
    document.getElementById("emoji").src = BaseURL + current_emotionImage;
    document.querySelector("#emotion").innerHTML = current_emotionName;
    document.querySelector("#message").innerHTML = current_message;
    document.getElementById("option1Label").innerText = current_option1;
    document.getElementById("option2Label").innerText = current_option2;
}
var EmotionInterval;
setup();
ChangeEmotion();
EmotionInterval = setInterval(ChangeEmotion, 10000); /* Runs for every 15 seconds */