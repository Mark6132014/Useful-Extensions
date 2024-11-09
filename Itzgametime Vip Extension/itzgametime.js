document.querySelector(".copy").addEventListener("click", () => {
    navigator.clipboard.writeText("🍕Itzgametime Vip");
});
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
    document.getElementById("description").innerHTML += "<br>" + param.itzgametime;
}
returnParam();