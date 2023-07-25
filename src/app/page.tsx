"use client";
import React from "react";
import useFetchData from "../hooks/useFetchDataLayout";
import DataLayoutContext from "../context/DataLayoutContext";
import Carousel from "./HomeComponents/Carousel";

export default function Home() {
  const { titles, ItensCarousel } = useFetchData();
  const DataInicial = [
    {
      categorie: "Cerveja Skoll",
    },
    {
      categorie: "Cerveja Skoll",
    },
    {
      categorie: "Cerveja Skoll",
    },
    {
      categorie: "Cerveja Skoll",
    },
    {
      categorie: "Cerveja Skoll",
    },
    {
      categorie: "Cerveja Skoll",
    },
  ];

  return (
    <DataLayoutContext.Provider value={{ titles, ItensCarousel }}>
      <main>
        {titles.map((item, index) => (
          <div key={index}>
            <Carousel items={ItensCarousel[index]} categorie={titles[index]} />
          </div>
        ))}
      </main>
    </DataLayoutContext.Provider>
  );
}
//<Carousel items={ItensCarousel[index]} />
