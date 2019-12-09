import React from "react";
import "./App.scss";
import { Iframe } from "./components";
import TopBar from "./TopBar/TopBar";
import data from "./data.json";
import LinksBar from "./LinksBar/LinksBar";

const App: React.FC = () => {
  return (
    <div className="App">

      <LinksBar links={data} onClick={() => {}} />

      <main className="main">
      <TopBar />
        <Iframe src={""} />
      </main>
    </div>
  );
};

export default App;
