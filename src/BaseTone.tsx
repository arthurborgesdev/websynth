import { useState, useEffect } from 'react'
import ToneGenerator from "./services/toneGenerator";

declare global {
  interface Window {
    webkitAudioContext: typeof AudioContext;
  }
}

export default function BaseTone() {
  const [playLabel, setPlayLabel] = useState("Play A4")
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioContext = new AudioContext();

  console.log("INICIOU")
  const toneGenerator = new ToneGenerator(audioContext);
  toneGenerator.connect(audioContext.destination);

  async function togglePlay() {
    if (audioContext.state === "running") {
      await toneGenerator.suspend()
      setPlayLabel("Play A4")
    } else if (audioContext.state === "suspended") {
      await toneGenerator.resume()
      setPlayLabel("Stop A4")
    }
    console.log("playLabel", playLabel)
  }

  return (
    <>
      <button onClick={() => togglePlay()}>{playLabel}</button>
    </>
  )
}