"use client";
import React from "react";
import useFetchData from "../hooks/useFetchDataLayout";
import DataLayoutContext from "../context/DataLayoutContext";
import Carousel from "./HomeComponents/Carousel";
import PromotionalCarousel from "./HomeComponents/PromotionalCarousel";

export default function Home() {
  const { titles, ItensCarousel } = useFetchData();

  return (
    <DataLayoutContext.Provider value={{ titles, ItensCarousel }}>
      <PromotionalCarousel></PromotionalCarousel>
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
