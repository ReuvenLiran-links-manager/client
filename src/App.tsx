import React, { useState, CSSProperties } from "react";
import "./App.scss";
import { Iframe } from "./components";
import TopBar from "./TopBar/TopBar";
import LINKS from "./data.json";
import LinksBar from "./LinksBar/LinksBar";

const PROXY = "http://localhost:9000/";

const mystyles = {
  display: "none"
} as React.CSSProperties;

const listenser = new Set();

function listenOn(event: string, callback: Function) {
  if (!listenser.has(event)) {
    window.addEventListener(
      "message",
      e => {
        const { data, origin, isTrusted } = e;
        if (
          typeof data === "object" &&
          origin === "http://localhost:9000" &&
          isTrusted
        ) {
          listenser.add(event);

          console.log("data", e);
          if (data.event === event) {
            callback(e);
          }
        }
      },
      false
    );
  }
}

const App: React.FC = () => {
  const [url, setUrl] = useState("");

  listenOn("service_worker_ready", () => {
    setUrl("http://localhost:9000/https%3A%2F%2Fwww.google.com");
  });
  // setTimeout(() => {
  //   setUrl("http://localhost:9000/https%3A%2F%2Fwww.google.com");
  //   // setUrl(
  //   //   "http://localhost:9000/https%3A%2F%2Funix.stackexchange.com%2Fquestions%2F5642%2Fwhat-if-kill-9-does-not-work"
  //   // );
  // }, 2000);

  return (
    <div className="App">
      <LinksBar
        links={LINKS}
        onClick={newUrl => {
          const clearProxyBase = `${PROXY}clearProxyBase`;
          setUrl(clearProxyBase);

          const proxyUrl = PROXY + encodeURIComponent(newUrl);
          setTimeout(() => {
            setUrl(proxyUrl);
          }, 500);

          console.log(proxyUrl);
        }}
      />

      <main className="main">
        <TopBar />
        <Iframe
          style={mystyles}
          id="service-worker"
          src="http://localhost:9000/static/proxy-init.html"
        />
        <Iframe id="my-iframe" src={url} />
      </main>
    </div>
  );
};

export default App;
