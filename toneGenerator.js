class ToneGenerator {
  constructor(audioContext) {
    this.audioContext = audioContext;
    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.type = 'sine'; // Use a sine wave for a pure tone
    this.oscillator.frequency.setValueAtTime(440, this.audioContext.currentTime); // Set frequency to 440 Hz
    this.oscillator.start();
  }

  connect(destination) {
    this.oscillator.connect(destination);
  }

  start() {
    this.oscillator.start();
  }

  stop() {
    this.oscillator.stop();
  }
}

export default ToneGenerator;