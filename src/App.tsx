import React, { useState, CSSProperties } from "react";
import "./App.scss";
import { Iframe } from "./components";
import TopBar from "./TopBar/TopBar";
import data from "./data.json";
import LinksBar from "./LinksBar/LinksBar";

const mystyles = {
  display: "none"
} as React.CSSProperties;


const App: React.FC = () => {
  const [url, setUrl] = useState("");
  setTimeout(() => {
    setUrl("http://localhost:9000/https%3A%2F%2Fwww.google.com");

    // setUrl("http://localhost:9000/https%3A%2F%2Fwww.google.com");
  }, 5000);

  return (
    <div className="App">
      <LinksBar
        links={data}
        onClick={() => {
          console.log("empty");
        }}
      />

      <main className="main">
        <TopBar />
        <Iframe
          style={mystyles}
          id="service-worker"
          src="http://localhost:9000/html.html"
        />
        <Iframe id="my-iframe" src={url} />
      </main>
    </div>
  );
};

export default App;
