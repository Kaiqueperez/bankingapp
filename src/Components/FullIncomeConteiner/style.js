import styled, {  } from "styled-components";
import { Cssvariables } from "../theme/theme";



export const Conteiner = styled.div`
    height: 22.9375em;
    width: 39.6875em;
    padding: 25px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    margin-top: 10px;
    grid-column-start: 1;
    grid-column-end: 2;
    position: relative;
    bottom: 118px;

    #Total-income-Conteiner{
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg{
            :hover{
                cursor: pointer;
            }
        }
    }


    .selector-icon-conteiner{
        display: flex;
        align-items: center;
        gap: 10px;
    }
`
export const Selector = styled.select`

        border-radius: ${Cssvariables.borderRaduis};
        background-color: ${Cssvariables.secondcolor};
        padding-left: 16px;
        height: 2.9375em;
        border: none;
`

export const IncomeMonthsConteiner = styled.div`
    background-color: white;
    height: 22.9375em;
    width: 39.6875em;
    display: flex;
    justify-content: space-around;

    .chartDataConteiner{
        width: 100%;
        margin-right: 20px
    }
`

