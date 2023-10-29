import React from "react";

export default function Banner( {text} ) {

  const greetingStyle = {
    paddingLeft: "50px",
    backgroundColor: "#7749F8",
    color: "white",
    height: "200px",
    display: "flex",
    alignItems: "center",
    fontSize: "50px",
  };

  return <div style={greetingStyle}>{text}</div>;
}