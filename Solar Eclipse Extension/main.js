function addEclipseElements() {
    var eclipseFrame = document.createElement('div');
    eclipseFrame.className = 'eclipseFrame';
    eclipseFrame.innerHTML = `<center><div class="container"><div style="height: 10vh; width: 100%;"></div><center><div class="sun"></div></center><div class="moon"></div></div></center>`;
    eclipseFrame.oncontextmenu = () => {return false};

    var style = document.createElement('style');
    style.id = 'CSSEclipse';
    style.innerHTML = `.eclipseFrame { transition: 0.6s ease-in-out; background: rgba(0, 0, 0, 0.541); height: 100vh; width: 100%; position: fixed; top: 0; left: 0; opacity: 0; display: none; z-index: 1000000000000000000000000000000; }
    .eclipseFrame .container { height: 100vh; width: 80%; }
    .eclipseFrame .container .sun { height: 150px; width: 150px; background: yellow; transition: 0.6s ease-in-out; animation: animateSunBrightness 2s ease infinite; border-radius: 50%; }
    @keyframes animateSunBrightness { 0%, 100% { background: yellow; } 50% { background: gold; } }
    .eclipseFrame .container .moon { height: 150px; width: 150px; background: black; transition: 1s ease-in-out; border-radius: 50%; position: absolute; top: 40vh; left: 20%; }`;

    document.body.appendChild(eclipseFrame);
    document.head.appendChild(style);
}
addEclipseElements();