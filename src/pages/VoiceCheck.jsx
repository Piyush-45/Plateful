import React from "react";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const VoiceCheck = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return null;
  }

  return (
    <div>
      <button
        onClick={SpeechRecognition.startListening}
      >
        start
      </button>
      <button onClick={SpeechRecognition.stopListening}>stop</button>
      <button onClick={resetTranscript}>reset</button>
      {/* {console.log(transcript)} */}
      <h1>{transcript}</h1>
    </div>
  );
};

export default VoiceCheck;
