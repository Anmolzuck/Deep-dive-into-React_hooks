import React from "react";

const Demo = (props) => {
  console.log("Demo output running");

  return <p>{props.showParagraph ? "This is new " : ""}</p>;
};

export default React.memo(Demo);
