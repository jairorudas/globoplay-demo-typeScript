import React, { useState, createContext, useEffect } from "react";
import FilmeSchema from "../../src/interfaces/filme";

export const AplicationContext = createContext({});

const AplicationProvider = ({ children }: { children: React.FC }) => {
  const [currentFilme, setCurrentFilme] = useState(null);
  const [filmes, setFilmes] = useState<FilmeSchema[]>([]);
  const [findFilme, setFindFilme] = useState("");

  useEffect(() => {
    fetch("http://api.tvmaze.com/search/shows?q=girls").then(async (res) => {
      const filmes = await res.json();
      setFilmes(filmes);
    });
  }, []);

  return (
    <AplicationContext.Provider
      value={{
        filmes,
        findFilme,
        currentFilme,
        setCurrentFilme,
        setFindFilme,
      }}
    >
      {children}
    </AplicationContext.Provider>
  );
};

export default AplicationProvider;
