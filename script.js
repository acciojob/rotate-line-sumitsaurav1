//your JS code here. If required.
const line = document.getElementById('line');
let angle = 0;

function rotateLine() {
  line.style.transform = `rotate(${angle}deg)`;
  angle += 1; // Adjust the rotation speed here
  requestAnimationFrame(rotateLine);
}

rotateLine();