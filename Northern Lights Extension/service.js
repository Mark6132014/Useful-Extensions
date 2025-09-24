console.log("running extension...");

// Create context menu on install
chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "lights",
    title: "Northern Lights",
    contexts: ["all"]
  });
});

// Handle context menu click
chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const eclipseFrame = document.querySelector(".lightFrame");
      if (!eclipseFrame) return;

      const container = eclipseFrame.querySelector(".container");
      const moon = container?.querySelector(".lights");
      if (!container || !moon) return;

      eclipseFrame.style.display = "block";
      setTimeout(() => {
        eclipseFrame.style.opacity = 1;
        setTimeout(() => {
          eclipseFrame.style.opacity = 0;
          setTimeout(() => {
            eclipseFrame.style.display = "none";
          },1500);
        }, 11000);
      }, 1000);
    }
  });
});
