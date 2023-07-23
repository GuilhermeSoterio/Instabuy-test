import * as S from "./styles";
import { SearchIcon } from "./search-icon";

export function PrimaryInput() {
  return (
    <>
      <S.InputContainer>
        <SearchIcon></SearchIcon>
        <S.PrimaryInput placeholder="O que você procura?"></S.PrimaryInput>
      </S.InputContainer>
    </>
  );
}
