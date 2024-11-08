var ImageFormats = [
    "png",
    "jpg",
    "webp",
    "gif",
    "avif",
    "jpeg",
    "apng",
    "svg",
    "img"
];
var VideoFormats = [
    "mp4",
    "mp3",
    "avi",
    "mkv",
    "mov",
    "wmv",
    "flv",
    "webm",
    "av1"
];
var href = location.href;
function redirectOpener(file, mediaType) {
    return `chrome-extension://${chrome.runtime.id}/viewer.html?file=${file}&mediaType=${mediaType}`
}
const currentUrl = window.location.href;

// Function to get the file extension from the URL
function getFileExtension(url) {
    const parts = url.split('.');
    if (parts.length > 1) {
        return parts.pop().split(/[?#]/)[0];
    }
    return '';
}

// Get the file extension
const fileExtension = getFileExtension(currentUrl);
if (ImageFormats.includes(fileExtension) || VideoFormats.includes(fileExtension)) {
    if (ImageFormats.includes(fileExtension)) {
        location.replace(redirectOpener(href, "image"));
    } else if (VideoFormats.includes(fileExtension)) {
        location.replace(redirectOpener(href, "video"));
    }
} else {
    console.warn("This webpage is not a video or image or even audio.");
}