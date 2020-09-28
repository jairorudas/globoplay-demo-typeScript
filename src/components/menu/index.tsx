import React, { useEffect, useState } from "react";
import search from "../../assets/search.png";
import feed from "../../assets/feed.png";
import market from "../../assets/market.png";
import videoPlayer from "../../assets/video-player.png";
import user from "../../assets/user.png";
import NAVIGATION from "../../utils/navContainer";

import "./styles.css";

export default () => {
  const [currentNav, setCurrentNav] = useState();
  const [itemMenu, setItemMenu] = useState(0);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      setTimeout(
        () => {
          const currentContainer = +localStorage.getItem("currentNav");
          setCurrentNav(currentContainer);

          if (currentContainer === 0) {
            if (e.key === "ArrowRight") {
              localStorage.setItem("currentNav", NAVIGATION.keyboard);
            }
            if (e.key === "ArrowDown") {
              setItemMenu((item) => item + 1);
            }
            if (e.key === "ArrowUp") {
              setItemMenu((item) => item - 1);
            }
          }
        },
        100,
        this
      );
    });
  }, []);

  return (
    <section id="nav-0">
      <ul
        className={`fatherList ${currentNav === 0 ? "menu-open" : ""}`}
        id="menu"
      >
        <li
          className={`item ${
            currentNav === 0 && itemMenu === 0 ? "active" : ""
          }`}
        >
          <img src={search} alt="search" />
          <p className={`${currentNav === 0 ? "show-label" : ""}`}> Busca</p>
        </li>
        <li
          className={`item ${
            currentNav === 0 && itemMenu === 1 ? "active" : ""
          }`}
        >
          <img src={market} alt="Inicio" />
          <p className={`${currentNav === 0 ? "show-label" : ""}`}>Inicio</p>
        </li>
        <li
          className={`item ${
            currentNav === 0 && itemMenu === 2 ? "active" : ""
          }`}
        >
          <img src={feed} alt="Now" />
          <p className={`${currentNav === 0 ? "show-label" : ""}`}>
            Agora na TV
          </p>
        </li>
        <li
          className={`item ${
            currentNav === 0 && itemMenu === 3 ? "active" : ""
          }`}
        >
          <img src={videoPlayer} alt="Categoria" />
          <p className={`${currentNav === 0 ? "show-label" : ""}`}>
            Categorias
          </p>
        </li>
        <li
          className={`item ${
            currentNav === 0 && itemMenu === 4 ? "active" : ""
          }`}
        >
          <img src={user} alt="User" />
          <p className={`${currentNav === 0 ? "show-label" : ""}`}>User</p>
        </li>
      </ul>
    </section>
  );
};
