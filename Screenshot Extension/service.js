chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: "4",
    title: `Capture Image`,
    contexts: ["selection", "page", "all"]
  });
});

var myFunction = async () => {
  try {
    // Request screen capture
    const stream = await navigator.mediaDevices.getDisplayMedia({ video: { cursor: "always" } });
    const track = stream.getVideoTracks()[0];
    const imageCapture = new ImageCapture(track);

    // Take a screenshot
    const bitmap = await imageCapture.grabFrame();
    track.stop();

    // Create a canvas to draw the screenshot
    const canvas = document.createElement('canvas');
    canvas.width = bitmap.width;
    canvas.height = bitmap.height;
    const context = canvas.getContext('2d');
    context.drawImage(bitmap, 0, 0, canvas.width, canvas.height);

    // Convert the canvas to an image and download it
    const link = document.createElement('a');
    link.href = canvas.toDataURL('image/png');
    link.download = 'screenshot.png';
    link.click();
} catch (err) {
    console.error("Error: " + err);
}
}

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId === "4") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: myFunction,
      args: [info]
    });
  }
});
