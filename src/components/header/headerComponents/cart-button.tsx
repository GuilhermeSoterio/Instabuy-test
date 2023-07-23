import * as S from "./styles";
import { CartIcon } from "./cart-icon";

export function CartButton() {
  return (
    <>
      <S.ContainerCart>
        <CartIcon></CartIcon>
        Carrinho
      </S.ContainerCart>
    </>
  );
}
