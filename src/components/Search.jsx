import "regenerator-runtime/runtime";
import React, { useState, useEffect } from "react";



// !fixing mic problem import React, { useState, useEffect } from "react";
import searchIcon from "../images/searchiconsvg.svg";
import { useNavigate } from "react-router-dom";
import mic from "../images/mic.png";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/searched/${searchTerm}`);
  };

  const handleSearch = () => {
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }
    SpeechRecognition.startListening();
  };

  const handleSearchResult = () => {
    if (transcript) {
      setSearchTerm(transcript);
      resetTranscript();
    }
  };

  
  useEffect(() => {
    handleSearchResult();
  }, [transcript]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="nav__input">
        <input
          type="text"
          placeholder="Search"
          // autoComplete="off"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img src={searchIcon} alt="" />
        <button type="button" onClick={handleSearch}>
          <img src={mic} alt="" />
        </button>
      </div>
    </form>
  );
};

export default Search;



// ? rNote that I removed the listening variable from the useSpeechRecognition hook since it was not being used. Also, I added a type="button" attribute to the microphone button to prevent it from submitting the form when clicked. Finally, I moved the call to handleSearchResult to an effect that triggers whenever transcript changes, so that it updates the search term whenever speech input is detected.