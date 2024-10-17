chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "3",
    title: `Change Title`,
    contexts: ["selection", "page"]
  });
});
function myFunction(info) {
  var updatedTitle = prompt("Put in your changed title here:", "My Favorite page");
  if (updatedTitle) {
    localStorage.setItem(location.href, updatedTitle);
    document.title = updatedTitle;
  }
}
chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "3") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: myFunction,
      args: [info]
    });
  }
});