chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "2",
    title: `Search "%s" on YouTube`,
    contexts: ["selection"]
  });
});

function myFunction(info) {
  var searchText = info.selectionText;
  var searchUrl = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(searchText);
  location.assign(searchUrl);
}

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "2") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: myFunction,
      args: [info]
    });
  }
});
