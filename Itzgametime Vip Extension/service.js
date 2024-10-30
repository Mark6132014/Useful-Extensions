console.log("running extension...");
chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'openPopup') {
      // Open the extension's popup
      chrome.browserAction.openPopup();
    }
  });
  chrome.contextMenus.create({
    id: "1",
    title: "🍕Itzgametime Vip!",
    contexts: ["selection", "page", "all"]
  });
  function myFunction() {
    var itzgametimeInput = prompt("Type in 🍕Itzgametime Vip:");
    if (itzgametimeInput.toLowerCase().includes("itzgametime vip")) {
      let Website = window.open(`chrome-extension://${chrome.runtime.id}/itzgametime.html`, "popup", "height=600,width=1100");
      Website.focus();
      Website.moveTo(90, 50);
    } else {
      alert("Wrong. Try again.");
    }
  }
  chrome.contextMenus.onClicked.addListener(function(info, tab) {
    // Execute your JavaScript code here
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: myFunction // Call the function you want to execute
    });
});