import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/counter";
import "semantic-ui-css/semantic.min.css";
import Clock from "./components/clock";

function App() {
  return (
    <div>
      <Counter />;
      <Clock />
    </div>
  );
}

export default App;
