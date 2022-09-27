import styled, {  } from "styled-components";
import { Cssvariables } from "../Dashbooard/style";

export const DashboardConteiner = styled.div`
   background-color: #E5E5E5;
   padding-left: 25px;
    margin-left: 20px;
    display: grid;
    grid-template-columns: 0fr;
    column-gap: 10px;

    .titleConteiner{

        grid-column-start: 1;
        grid-column-end: 3;
        p{
        font-size: ${Cssvariables.fontSizeNumber};
        font-weight: bolder;

    }
    }
   
   
`
export const ConteinerOverview = styled.div`
    height: 27.6875em;;
    width: 39.8125em;
    border-radius: 15px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    background-color: white;
    grid-column-end: 2;
    grid-column-start: 1;
`
export const overviewHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    p{
        font-weight: bold;
    }

    select{
        border-radius: ${Cssvariables.borderRaduis};
        background-color: ${Cssvariables.secondcolor};
        padding-left: 16px;
        height: 2.9375em;
        border: none;
        

    }
`
export const overviewBody = styled.div`
    background-color: ${Cssvariables.secondcolor};

    border-radius: ${Cssvariables.borderRaduis};

    display: flex;
    justify-content: space-evenly;
    padding: 10px;

    #customer{
        background-color: #EFEFEF;
        height: 7.5em;
        width: 17.625em;
        border-radius: ${Cssvariables.borderRaduis};
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        
        p{
            
        }
        .custom-number{
            font-size: ${Cssvariables.fontSizeNumber};
            font-weight: bolder;
        }
    }
    .percentage{
        display: flex;
        justify-content: center;
        align-items: center;
        color: #02EF36;
        background-color: #D9D9D9;
        width: 2.4375em;
        height: 1.875em;
        border-radius: ${Cssvariables.borderRaduis};
        position: relative;
        bottom: 36px;
        left: 30px;

    }

    #income{

        .income-number{
            font-size: ${Cssvariables.fontSizeNumber};
            font-weight: bolder;
        }
    }
`
export const UsersMocka = styled.div `
    

    #UsersConteiner{
        display: flex;
        align-items: center;
        justify-content: space-evenly;

        

        .Bar-bar{
            height: 39px;
            background-color: #C9C9C9;
            padding: 1px;
        }
    }
`