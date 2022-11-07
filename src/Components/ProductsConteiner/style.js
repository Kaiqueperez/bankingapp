import styled from "styled-components";
import { Cssvariables } from "../Dashbooard/style";

export const PopuProductsConteiner = styled.div`
            height: 586px;
            width: 326px;
            grid-row-start: 2;
            grid-column-start: 2;
            background: white;
            border-radius: 15px;
            padding: 25px;

`

export const Titleproducts = styled.div`
    display: flex;
    flex-direction: column;

    div{
    display: flex;
    justify-content: space-between;
    }
`

export const ProductsValue = styled.div`
    height:  4.375em;
    border-bottom: 0.5px solid #C9C9C9;
    padding-bottom: 10px;

    .showCaseConteiner{

    }

    .showCase{
        display: flex;
        gap: 9px;
    }

    .productInfo{
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        p{
            margin: 0;
        }
    }

`
export const AllProductsConteiner = styled.div`
       
        text-align: center;
        padding: 33px;
        

        button{
            background-color: white;
            padding: 12px 60px 12px 60px;
            border: 0.5px solid;
            border-radius: ${Cssvariables.borderRaduis};

            :hover{
        cursor: ${Cssvariables.cursourLink};
        }

        
    }
`