import React, { useState } from "react";
import AplicationProvider from "./context/aplicationContext";
import Menu from "./components/menu";
import Keyboard from "./components/keyboard";
import Navigation from "./utils/navContainer";

import Container from "./components/container";
import "./App.css";

const App: React.FC = () => {
  const [activeContainer, setActiveContainer] = useState(1);

  return (
    <AplicationProvider>
      <Menu
        isActive={activeContainer === Navigation.menu}
        onLeaveRight={() => setActiveContainer(Navigation.keyboard)}
      />
      <section className="main-content">
        <div className="App" style={{ overflow: "hidden" }}>
          <Keyboard
            isActive={activeContainer === Navigation.keyboard}
            onLeaveLeft={() => setActiveContainer(Navigation.menu)}
            onLeaveRight={() => setActiveContainer(Navigation.carousel1)}
          />
          <section className="filmes-content">
            <h4 className="label-carousel">Filmes</h4>
            <Container
              id={2}
              isActive={activeContainer === Navigation.carousel1}
              onLeaveLeft={() => setActiveContainer(Navigation.keyboard)}
              onLeaveDown={() => setActiveContainer(Navigation.carousel2)}
            ></Container>

            <h4 className="label-carousel">Series</h4>
            <Container
              id={3}
              isActive={activeContainer === Navigation.carousel2}
              onLeaveLeft={() => setActiveContainer(Navigation.keyboard)}
              onLeaveTop={() => setActiveContainer(Navigation.carousel1)}
            ></Container>
          </section>
        </div>
      </section>
    </AplicationProvider>
  );
};

export default App;
