import { useEffect, useState } from "react";
import LayoutHome from "../service/LayoutHome";
import { CollectionItem } from "@/types/types";

const useFetchData = () => {
  const [data, setData] = useState<CollectionItem[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        console.log("entrou aqui")
        const carrouselData = await LayoutHome.getProductsListWithCategories();
        setData(carrouselData);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);
  console.log("entrou aqui22")
  const titles = data.map((item) => item.title);
  const ItensCarousel = data.map((item) => item.items);

  return { titles, ItensCarousel };
};

export default useFetchData;
