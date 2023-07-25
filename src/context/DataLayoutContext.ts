import { Item } from "@/types/types";
import { createContext, useContext } from "react";

// Defina a tipagem para os dados do contexto
interface DataContextValue {
  titles: string[];
  ItensCarousel: Item[][];
}

// Crie o contexto
const DataLayoutContext = createContext<DataContextValue | null>(null);

// Crie o hook para acessar os dados do contexto
export const useDataLayoutContext = () => {
  const data = useContext(DataLayoutContext);
  if (!data) {
    throw new Error("useDataLayoutContext deve ser usado dentro de um Provider de DataLayoutContext");
  }
  return data;
};

export default DataLayoutContext;