function addEclipseElements() {
  const eclipseFrame = document.createElement('div');
  eclipseFrame.className = 'lightFrame';
  eclipseFrame.innerHTML = `<center><div class="container"><div style="height: 10vh; width: 100%;"></div><center><div class="lights"></div></center></div></center>`;
  eclipseFrame.oncontextmenu = () => false;

  const style = document.createElement('style');
  style.id = 'CSSEclipse';
  style.innerHTML = `
    @keyframes superPulse { 0%, 100% {box-shadow: 0 0 30px #58D68D;} 50% { box-shadow: 0 0 20px #3498DB; } }
    .lightFrame {
      transition: 0.6s ease-in-out;
      background: rgba(0, 0, 0, 0.541);
      height: 100vh;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      opacity: 0;
      display: none;
      z-index: 999999999;
    }
    .lightFrame .container {
      height: 100vh;
      width: 80%;
    }
    .lightFrame .container .lights {
      height: 150px;
      width: 75%;
      background: linear-gradient(to right, #58D68D, #3498DB);
      transition: 1s ease-in-out;
      border-bottom-right-radius: 50%;
      position: absolute;
      top: 0;
      left: 0;
      animation: superPulse 3s ease-in-out infinite;
    }
  `;

  document.body.appendChild(eclipseFrame);
  document.head.appendChild(style);
}

addEclipseElements();
