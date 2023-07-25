"use client";

import * as S from "./styles";
import { PrimaryInput } from "./headerComponents/primary-input";
import { Logotipo } from "./headerComponents/logotipo";
import { CartControl } from "./headerComponents/cart-control";

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
