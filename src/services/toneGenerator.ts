class ToneGenerator {
  private audioContext: AudioContext;
  private oscillator: OscillatorNode;
  private gainNode: GainNode;

  constructor(audioContext) {
    this.audioContext = audioContext;
    this.gainNode = this.audioContext.createGain();
  }

  connect(destination) {
    this.oscillator = this.audioContext.createOscillator();
    this.oscillator.type = 'sine'; // Use a sine wave for a pure tone
    this.oscillator.frequency.setValueAtTime(440, this.audioContext.currentTime); // Set frequency to 440 Hz
    this.oscillator.start();

    // Connect the oscillator to the gain node, and the gain node to the destination
    this.oscillator.connect(this.gainNode)
    this.gainNode.connect(destination);
  }

  async suspend() {
    await this.audioContext.suspend()
  }

  async resume() {
    await this.audioContext.resume()
  }

  stop() {
    if (this.oscillator && this.oscillator.stop) {
      this.oscillator.stop();
      // It's a good practice to release resources and recreate the oscillator when needed again
      this.oscillator.disconnect();
      this.gainNode.disconnect();
    }
  }
}

export default ToneGenerator;