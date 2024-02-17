import ToneGenerator from './toneGenerator.js';

document.addEventListener('DOMContentLoaded', () => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const toneGenerator = new ToneGenerator(audioContext);
  toneGenerator.connect(audioContext.destination);

  // Example controls
  const button = document.createElement('button');
  button.textContent = 'Start A4';
  button.onclick = () => {
    toneGenerator.start();
    button.textContent = 'Stop A4';
  }

  document.body.appendChild(button);
});