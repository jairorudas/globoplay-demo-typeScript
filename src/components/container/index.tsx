import React, { useContext, useEffect, useState } from "react";
import { AplicationContext } from "../../context/aplicationContext";
import NAVIGATION from "../../utils/navContainer";
import FilmeSchema from "../../../src/interfaces/filme";

import "./styles.css";

const Item = ({ filme } = { filme: FilmeSchema }) => (
  <img className="img-filme" src={filme.show.image?.medium} alt="img" />
);

const Container: React.FC = ({ id }: { id: string }) => {
  const { filmes, findFilme } = useContext(AplicationContext);

  const [currentNav, setCurrentNav] = useState(0);
  const [localFilmes, setLocalFilmes] = useState<FilmeSchema[]>([]);
  let index = 0;

  const animateCarousel = (side: string) => {
    const currentContainerID = Number(localStorage.getItem("currentNav"));
    setCurrentNav(currentContainerID);
    let NEW_TRANSLATE = null;
    const NODE = document.getElementById(`nav-${currentContainerID}`);
    const LIST = NODE.getElementsByTagName("li") || [];
    const DATA_TRANSFORM = LIST[0].style.transform;
    const value =
      +DATA_TRANSFORM?.slice(
        DATA_TRANSFORM.length - 7,
        DATA_TRANSFORM.length - 3
      ) || 90;

    if (!(index === LIST.length)) {
      if (side === "prev") {
        NEW_TRANSLATE = value - 110;

        for (let item of LIST) {
          item.style.transform = `translate(calc(210px - ${NEW_TRANSLATE}%))`;
        }
      } else {
        NEW_TRANSLATE = value + 110;
        for (let item of LIST) {
          item.style.transform = `translate(calc(210px - ${NEW_TRANSLATE}%))`;
        }
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      let currentContainer = Number(localStorage.getItem("currentNav"));
      setCurrentNav(currentContainer);
      if (currentContainer === +id) {
        if (e.key === "ArrowLeft") {
          goToFilme("prev");
        }

        if (e.key === "ArrowRight") {
          goToFilme("next");
        }

        if (e.key === "ArrowDown") {
          localStorage.setItem("currentNav", NAVIGATION.carousel2);
        }
        if (e.key === "ArrowUp") {
          localStorage.setItem("currentNav", NAVIGATION.carousel1);
        }
      }
    });
  }, []);

  useEffect(() => {
    if (findFilme) {
      const result = filmes.filter((filme: any) => {
        const name = filme.show.name;
        if (name.toLowerCase().includes(findFilme)) {
          return filme;
        }
        return null;
      });
      setLocalFilmes(result);
    } else {
      setLocalFilmes(filmes);
    }
  }, [findFilme, filmes]);

  const goToFilme = (move: string) => {
    if (move === "next") {
      index += 1;
      animateCarousel(move);
    } else {
      if (index === 0) {
        localStorage.setItem("currentNav", NAVIGATION.keyboard);
      } else {
        index -= 1;
        animateCarousel(move);
      }
    }
  };

  return (
    <section style={{ position: "relative" }}>
      <ul className="horizontal" id={`nav-${id}`}>
        {localFilmes.map((el, i) => (
          <li key={el.show.id} className={`list`} id={el.show.id.toString()}>
            <Item filme={el} />
          </li>
        ))}
      </ul>
      <div className={` ${currentNav === +id ? "selection" : ""} `}></div>
    </section>
  );
};

export default Container;
