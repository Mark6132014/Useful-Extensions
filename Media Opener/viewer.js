function getUrlParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const regex = /([^&=]+)=([^&]*)/g;
    let m;
    while (m = regex.exec(queryString)) {
        params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }
    return params;
}
function returnParam() {
    const param = getUrlParams();
    var description = document.getElementById("description");
    const file = param.file;
    const mediaType = param.mediaType;
    if (mediaType == "image") {
        description.innerText = "Look at this photo!";
        document.querySelector(".image").style.display = "block";
        document.getElementById("imageViewer").src = file;
    } else if (mediaType == "video") {
        description.innerText = "Look at this video/song!";
        document.getElementById("videoViewer").src = file;
        document.querySelector(".video").style.display = "block";
    }
}
document.getElementById("resizeBtn").addEventListener("click", () => {
    document.getElementById("imageViewer").setAttribute("height", parseInt(document.getElementById("heightImage").value));
    document.getElementById("imageViewer").setAttribute("width", parseInt(document.getElementById("widthImage").value));
});
returnParam();