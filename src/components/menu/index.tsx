import React, { useEffect, useState, useCallback } from "react";
import search from "../../assets/search.png";
import feed from "../../assets/feed.png";
import market from "../../assets/market.png";
import videoPlayer from "../../assets/video-player.png";
import user from "../../assets/user.png";

import "./styles.css";

const Menu = ({ isActive, onLeaveRight }) => {
  const [itemMenu, setItemMenu] = useState(1);

  const onKeyDown = useCallback(
    (e) => {
      if (isActive) {
        if (e.key === "ArrowRight") {
          onLeaveRight();
        }
        if (e.key === "ArrowDown") {
          setItemMenu((item) => (item < 4 ? item + 1 : item));
        }
        if (e.key === "ArrowUp") {
          setItemMenu((item) => (item > 0 ? item - 1 : item));
        }
      }
    },
    [isActive]
  );
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isActive, onKeyDown]);

  return (
    <section id="nav-0">
      <ul className={`fatherList ${isActive ? "menu-open" : ""}`} id="menu">
        <li className={`item ${isActive && itemMenu === 0 ? "active" : ""}`}>
          <img src={search} alt="search" />
          <p className={`${isActive ? "show-label" : ""}`}> Busca</p>
        </li>
        <li className={`item ${isActive && itemMenu === 1 ? "active" : ""}`}>
          <img src={market} alt="Inicio" />
          <p className={`${isActive ? "show-label" : ""}`}>Inicio</p>
        </li>
        <li className={`item ${isActive && itemMenu === 2 ? "active" : ""}`}>
          <img src={feed} alt="Now" />
          <p className={`${isActive ? "show-label" : ""}`}>Agora na TV</p>
        </li>
        <li className={`item ${isActive && itemMenu === 3 ? "active" : ""}`}>
          <img src={videoPlayer} alt="Categoria" />
          <p className={`${isActive ? "show-label" : ""}`}>Categorias</p>
        </li>
        <li className={`item ${isActive && itemMenu === 4 ? "active" : ""}`}>
          <img src={user} alt="User" />
          <p className={`${isActive ? "show-label" : ""}`}>User</p>
        </li>
      </ul>
    </section>
  );
};

export default Menu;
