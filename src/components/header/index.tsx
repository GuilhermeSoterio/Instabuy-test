"use client";

import * as S from "./styles";
import { SearchIcon } from "./headerComponents/search-icon";
import { CartButton } from "./headerComponents/cart-button";
import { PrimaryInput } from "./headerComponents/primary-input";
import { CartIcon } from "./headerComponents/cart-icon";
import { Logotipo } from "./headerComponents/logotipo";
import { CartControl } from "./headerComponents/cart-control";

interface HeaderPropts {}

export function Header() {
  return (
    <S.TagHeader>
      <Logotipo></Logotipo>
      <S.containerLogo>
        Supermercado <br />
        modelo
      </S.containerLogo>
      <PrimaryInput></PrimaryInput>
      <CartControl></CartControl>
    </S.TagHeader>
  );
}
