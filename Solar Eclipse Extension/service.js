console.log("running extension...");
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'openPopup') {
      // Open the extension's popup
      chrome.browserAction.openPopup();
    }
  });
  chrome.contextMenus.create({
    id: "eclipse",
    title: "Solar eclipse",
    contexts: ["selection", "page", "all"]
  });
  function myFunction() {
    var eclipseFrame = document.querySelector(".eclipseFrame");
    var container = eclipseFrame.querySelector(".container");
    var sun = container.querySelector(".sun");
    var moon = container.querySelector(".moon");
    eclipseFrame.style.display = "block";
    setTimeout(() => {
      eclipseFrame.style.opacity = 1;
    setTimeout(() => {
      moon.setAttribute("style", `transition: 1s ease-in-out; position: absolute; top: 12.5vh; left: 43%;`);
    setTimeout(() => {
        moon.setAttribute("style", `transition: 5s ease-in-out; position: absolute; top: 12.5vh; left: 43%; box-shadow: 0 0 10px white;`);
        setTimeout(() => {
            moon.setAttribute("style", `transition: 1s ease-in-out; position: absolute; top: 40vh; left: 60%; box-shadow: 0 0 0 transparent;`);
            eclipseFrame.style.opacity = 0;
            setTimeout(() => {
                eclipseFrame.style.display = "none";
                setTimeout(() => {
                  moon.removeAttribute("style");
                }, 1000);
            }, 1000);
        }, 7000);
    }, 1000);
    }, 1000);
    }, 500);
  }
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    // Execute your JavaScript code here
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: myFunction // Call the function you want to execute
    });
});