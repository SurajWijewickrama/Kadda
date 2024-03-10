import { useState } from "react";
import "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import askAssistant from "../api/assistant";
import TextToSpeech from "./TextToSpeech";

const SpeechToText = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const [answer, setAnswer] = useState("");

  const startListening = SpeechRecognition.startListening({
    continuous: true,
    language: "en",
  });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={() => startListening}>Start</button>
      <button onClick={SpeechRecognition.stopListening}>Stop</button>
      <button
        onClick={() => {
          resetTranscript();
          setAnswer("");
        }}
      >
        Reset
      </button>
      <button
        onClick={async () => {
          const response = await askAssistant(transcript);
          console.log(response);
          setAnswer(response || "");
        }}
      >
        Ask Bot
      </button>
      <p>{transcript}</p>
      <p>{answer}</p>
      <TextToSpeech text={answer} />
    </div>
  );
};
export default SpeechToText;
