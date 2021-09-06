import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo";

import "./App.css";
function App() {
  const [showPara, setShowPara] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App running");

  const paragraphhandler = useCallback(() => {
    if (allowToggle) {
      setShowPara((prevShowPara) => !prevShowPara);
    }
  }, [allowToggle]);

  const allowToggleHandler = useCallback(() => {
    setAllowToggle(true);
  }, []);

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo showParagraph={showPara}></Demo>
      <Button onClick={allowToggleHandler}>Allow Toggling </Button>
      <Button onClick={paragraphhandler}>Toggle paragraph</Button>
    </div>
  );
}

export default App;
