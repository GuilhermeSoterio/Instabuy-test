import { styled } from "styled-components"

export const PrimaryInput = styled.input`
    width: 80%;
    border-radius: 8px;
    padding: 10px 16px;
    border: none;
    background-color: var(--bg-secondary);

    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    border: none;
    outline: none;
`

export const InputContainer =  styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding-left: 10px;
    background-color: var(--bg-secondary);  
`

export const Logotipo = styled.img`
  width: 60px;
  height: 60px;
`;

export const ContainerCart =  styled.div`
    margin-left: 50px;
    width: 140px;
    height: 40px;
    display: flex;
    color: white;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    font-size: 1em;
    background-color: var(--green);
    
    & > :first-child {
        margin-right: 7px;
    }
`

export const CartCount = styled.span`
    width: 25px;
    height: 25px;
    z-index: 3;
    border-radius: 50%;
    background-color: #E91E63;
    color: white;
    font-size: 13px;

    display: flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
    right: -5px;
    bottom: 24px;
`

export const ContainerCardButton = styled.div`
    position: relative;
`