import axios from "axios";
import { useEffect } from "react";
import { Component } from "react";
import { useState } from "react";

function App() {
  const [advcie, updateAdvice] = useState("");

  useEffect(() => {
    console.log("Called once");
    getAdvice();
  }, []);

  function getAdvice() {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        // console.log(response.data.slip.advice);
        updateAdvice(a => (a = response.data.slip.advice));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="card">
      <h2 className="advice">{advcie}</h2>
      <button className="button" onClick={getAdvice}>
        <label>GIVE ME ADVICE!</label>
      </button>
    </div>
  );
}

export default App;
