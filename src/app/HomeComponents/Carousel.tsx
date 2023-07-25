"use client";
import "./styles.css";
import { Item } from "@/types/types";
import useCarousel from "@/hooks/useCarousel";
import { Arrow } from "./Arrow";
import { PlusButton } from "./plus-button";
import produtojpeg from "../../common/produto.jpeg";
import * as S from "./styles";
import { useDataLayoutContext } from "../../context/DataLayoutContext";

interface CarouselProps {
  items: Item[];
  categorie: string;
}

function Carousel({ items, categorie }: CarouselProps) {
  console.log("items ", items);
  console.log("categorie ", categorie);
  const { carousel, isBeginning, isEnd, handleLeftClick, handleRightClick } =
    useCarousel();

  const { ItensCarousel } = useDataLayoutContext();
  return (
    <S.container>
      <S.containerArrowButton onClick={handleLeftClick}>
        <S.ArrowInverse>
          <Arrow></Arrow>
        </S.ArrowInverse>
      </S.containerArrowButton>

      <S.containerBoxCarousel>
        <h2>{categorie}</h2>
        <S.carouselContent ref={carousel}>
          {items &&
            items.map((item) => {
              const { id, name, prices, images } = item;
              const { price, promo_price } =
                prices.length > 0 ? prices[0] : { price: 0, promo_price: 0 };
              return (
                <S.itensContentCarousel key={id}>
                  <S.containerPlusButton>
                    <PlusButton></PlusButton>
                  </S.containerPlusButton>
                  <S.ImgWrapper>
                    {images.length > 0 ? (
                      <S.Img
                        src={
                          "https://assets.instabuy.com.br/ib.item.image.medium/m-" +
                          images[0]
                        }
                        alt={name}
                      />
                    ) : (
                      // Renderizar alguma imagem padrão ou mensagem de imagem não disponível
                      // Caso images esteja vazio
                      <img
                        src="imagem-padrao.jpg"
                        alt="Imagem não disponível"
                      />
                    )}
                  </S.ImgWrapper>
                  <S.containerPrices>
                    {promo_price ? (
                      <>
                        <S.price>{promo_price}</S.price>
                        <S.oldPrice>R$ {price}</S.oldPrice>
                      </>
                    ) : (
                      <S.priceNoPromote>R$ {price}</S.priceNoPromote>
                    )}
                  </S.containerPrices>
                  <S.name>{name}</S.name>
                </S.itensContentCarousel>
              );
            })}
        </S.carouselContent>
      </S.containerBoxCarousel>

      <S.containerArrowButtonRight onClick={handleRightClick}>
        <Arrow></Arrow>
      </S.containerArrowButtonRight>
    </S.container>
  );
}

export default Carousel;
function useData(): { items: any } {
  throw new Error("Function not implemented.");
}
