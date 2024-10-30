var ItzgametimeVip = {
  name: "🍕Itzgametime Vip",
  say: function() {
      navigator.clipboard.writeText(ItzgametimeVip.name);
      console.log("%cItzgametime Vip: ", "color: red", "https://itzgametime-vip.w3spaces.com");
      console.log("import ItzgametimePlugin from './itzgametimevip.js';");
  },
  host: location.hostname, website: "https://itzgametime-vip.w3spaces.com",
  download: function() {
    window.location = "https://download1528.mediafire.com/2nfzt7e3i4hgaERZS3NUAAcLi6xgG8P3TiCQlvQmE7KN8HnW6urFke-9dyKVr0BedArFRZ326nArRpIEQRNecUrhRfSxoVjMcZsHT-lpsqo9AJSPD_3WREAx4uIU3zjGTfjK6WJfn3DIounIPMATgMijoxAmKsVIhYOOfjVOhucx2g/a8i777d1sq7j4dn/3D+Pizza.png";
  },
  cursor: function() {
    document.body.style.cursor = `url("chrome-extension://${chrome.runtime.id}/cursor.png"), auto`;
  },
  speech: function() {return new SpeechSynthesisUtterance()},
  teamMembers: document.querySelectorAll("itzgametimevip"),
  itzgametimevipTag: function() {
    for (var i = 0; i < ItzgametimeVip.teamMembers.length; i++) {
      ItzgametimeVip.teamMembers[i].style.fontFamily = "Segoe UI Light, Segoe Ui, Arial";
      ItzgametimeVip.teamMembers[2].innerHTML = "🍕Itzgametime Vip";
      ItzgametimeVip.teamMembers[i].addEventListener("click", () => {alert("🍕Itzgametime Vip!");});
      ItzgametimeVip.teamMembers[i].style.cursor = `url("chrome-extension://${chrome.runtime.id}/cursor.png"), auto`;
    }
  },
  extensionID: `chrome-extension://${chrome.runtime.id}/`
};
function ItzgametimeVipAction(code) {
  return code
}
new ItzgametimeVipAction(ItzgametimeVip.say());
function disabled() {
if (ItzgametimeVip.host == "www.google.com") {
    document.querySelector("head").innerHTML += '<style>html { scrollbar-color: red darkred; }</style>';
    document.body.innerHTML += `
    <h1 style="font-family: Segoe UI Light, Segoe UI, Arial; color: red; position: fixed; bottom: 0; left: 0; background: white; border: 5px groove rgb(204, 0, 0); z-index: 1; border-top-right-radius: 5px;">
    <style>
        pizza {
            content: url("https://itzgametime-vip.w3spaces.com/3D_Pizza.png");
            height: 50px;
            width: 50px;
        }
            </style>
    <span id="igtvip">
        <span>
            <pizza>
            </pizza>
        </span>
        🍕Itzgametime Vip!
        <small>
            Right click magic
        </small>
    </span>
    <span>
        <small id="fullscreen">
            Fullscreen
        </small>
    </span>
</h1>
    `;
    let speech = new SpeechSynthesisUtterance();
    document.querySelector("#igtvip").addEventListener("click", () => {
        navigator.clipboard.writeText("🍕Itzgametime Vip");
        var myWindow = window.open("https://itzgametime-vip.w3spaces.com", "popup", "height=300,width=300");
        myWindow.moveTo(500, 100);
        myWindow.focus();
        speech.text = "Hello! Welcome.";
        window.speechSynthesis.speak(speech);
    });
    document.querySelector("#igtvip").addEventListener("contextmenu", () => {
      document.designMode = "on";
      ItzgametimeVip.cursor();
    });
    document.querySelector("#fullscreen").addEventListener("click", () => {
      document.documentElement.requestFullscreen().catch((e) => {
        console.log(e);
      });
    });
    var teamMembers = document.querySelectorAll("itzgametimevip");
    var attr = document.querySelectorAll("[itzgametime='true']");
    for (var i = 0; i < teamMembers.length; i++) {
        teamMembers[i].style.fontFamily = "Segoe UI Light, Segoe Ui, Arial";
        teamMembers[2].innerHTML = "🍕Itzgametime Vip";
        teamMembers[i].addEventListener("click", () => {
            navigator.clipboard.writeText("🍕Itzgametime Vip");
            window.open("https://itzgametime-vip.w3spaces.com", "popup", "height=300,width=300");
        });
    }
    for (var j = 0; j < attr.length; j++) {
        attr[j].style.color = "red";
    } 
}
if (ItzgametimeVip.host == "fart.com") {
  location.replace("https://blocked.goguardian.com");
}
if (ItzgametimeVip.host == "poop.com") {
  location.replace("https://blocked.goguardian.com");
}
if (ItzgametimeVip.host == "blocked.goguardian.com") {
  document.querySelector(".content").innerHTML = "<h1><strong style='color: red'>Restricted</strong></h1><br>This website has been blocked by Itzgametime Vip Extension.";
}
if (location.pathname.includes("shorts") && ItzgametimeVip.host == "www.youtube.com") {
  var itzgametimestickerbutton = document.querySelector("body ytd-shorts #shorts-container #shorts-inner-container ytd-reel-video-renderer .short-video-container #watch-while-engagement-panel ytd-engagement-panel-section-list-renderer #header ytd-engagement-panel-title-header-renderer #header #title-container #title  .style-scope");
  itzgametimestickerbutton.innerHTML += `<span id="stickerButton" style="background: red; color: white; border-radius: 8px;">My Stickers</span>`;
  var stickerButton = document.querySelector("body ytd-shorts #shorts-container #shorts-inner-container ytd-reel-video-renderer .short-video-container #watch-while-engagement-panel ytd-engagement-panel-section-list-renderer #header ytd-engagement-panel-title-header-renderer #header #title-container #title .style-scope #stickerButton");
  stickerButton.addEventListener("click", () => {
    stickerButton.innerHTML = `<img src="https://yt3.ggpht.com/tguvHMJLVId2BH2Zc_7b3I0MimPNy6GvLt6jalE3IHFfWQM2QoA7kZgYd9hDpJZrYsKAHMwo=s88-c-k-c0x00ffffff-no-rj" height="50" width="50">`
  });
}
}
disabled()