import React from "react";
import AplicationProvider from "./context/aplicationContext";
import Menu from "./components/menu";
import Keyboard from "./components/keyboard";

import Container from "./components/container";
import "./App.css";

const App: React.FC = () => {
  return (
    <AplicationProvider>
      <Menu />
      <section className="main-content">
        <div className="App" style={{ overflow: "hidden" }}>
          <Keyboard />
          <section className="filmes-content">
            <h4 className="label-carousel">Filmes</h4>
            <Container id={2}></Container>
            <h4 className="label-carousel">Series</h4>
            <Container id={3}></Container>
          </section>
        </div>
      </section>
    </AplicationProvider>
  );
};

export default App;
