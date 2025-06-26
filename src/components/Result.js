import React from "react";

function Result({ result }) {
  if (!result) return null;
  return <div className="result">{result}</div>;
}

export default Result;