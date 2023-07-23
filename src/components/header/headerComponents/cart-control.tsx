import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartButton } from "./cart-button";
import * as S from "./styles";

export function CartControl() {
  const { value } = useLocalStorage<string[]>("cart-items");

  return (
    <div>
      <S.ContainerCardButton>
        {value?.length && <S.CartCount>{value?.length}</S.CartCount>}
        <CartButton></CartButton>
      </S.ContainerCardButton>
    </div>
  );
}
