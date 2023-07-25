import { styled } from "styled-components"


export const container = styled.div`
    display: flex;
    align-items: center;
    margin: auto;
    max-width: 80vw;
    position: relative;
`

export const categorie = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const containerBoxCarousel = styled.div`
    width: 100%;
    border-radius: 12px;
    height: 350px;
    display: flex;
    flex-direction: column;
    background-color: white;
    overflow-x: auto;
    margin-top: 20px;

    h2 {
        padding: 10px;
    }
    
`

export const carouselContent = styled.div`
    width: 100%;
    border-radius: 12px;
    height: 330px;
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    overflow-x: hidden;
    background-color: white;
    ::-webkit-scrollbar {
        display: none;
    }
`

export const itensContentCarousel = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 10px;
    padding: 0 10px;
    width: 190px;
    border-radius: 16px;
    flex: none;
    position: relative;
`

export const imageCard = styled.div`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const price = styled.p`
    margin-top: 10px;
    font-size: 1.0rem;
    letter-spacing: 0rem;
    font-weight:600;
    padding-right: 8px;
    color: var(--ib-colors-brand-tertiary);
`

export const priceNoPromote = styled.p`
letter-spacing: 0rem;
    margin-top: 10px;
    font-size: 1.0rem;
    font-weight: 600;
    padding-right: 8px;
    color: black;
`

export const oldPrice = styled.p`
    margin-top: 14px;
    font-size: 0.8rem;
    font-weight:600;
    text-decoration: line-through;
    color: var(--ib-colors-gray-dark);
`

export const name = styled.p`
    display: -webkit-box;
    -webkit-line-clamp: 3; /* Limite para três linhas */
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.875rem;
    margin: 10px 0;
    color: var(--ib-colors-gray-dark);
`

export const ImgWrapper = styled.div`
  width: 100%;
  height: 150px;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain; /* ou object-fit: cover, dependendo do comportamento desejado */
`;

export const containerPlusButton = styled.button`
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    border: none;
    position: absolute;
    background-color: white;
    border-radius: 50%;
    width: 3.1rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    left: 120px;
`

export const containerArrowButton = styled.button`
    cursor: pointer;
    border: none;
    position: relative;
    background-color: var(--ib-colors-brand-primary);
    border-radius: 50%;
    width: 3.1rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 30px;
`

export const containerArrowButtonRight = styled.button`
    cursor: pointer;
    border: none;
    position: relative;
    background-color: var(--ib-colors-brand-primary);
    border-radius: 50%;
    width: 3.1rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    right: 30px;
`

export const containerPrices = styled.div`
    display: flex;
`

export const ArrowInverse = styled.div`
    transform: rotate(-180deg);
`