import styled from "styled-components";



const Cssvariables = {
    borderRaduis: '30px',
    cursourLink: 'pointer'
}

export const headerConteiner = styled.header `
    width: 100%;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 23px 0px;

    .dfodkfok{
        position: relative;
        left: 35px;
        color: #8E8E8E;
        
    }
    
`
export const Logo = styled.div`
    width: 136px;
    height: 86px;
    display: flex;
    flex-direction: column;
    gap: 31px;
    margin-left: 29px;

    .kdeokds{
        width: 100%;
        :hover{
            cursor: ${Cssvariables.cursourLink};
        }
    }
    .fefjse{
        width: 80px;
        height: 20px;
        cursor: ${Cssvariables.cursourLink};
    }
`
export const inputConteiner = styled.div `

`
export const inputSearch = styled.input`
    background-color: #D9D9D9;
    padding-left: 60px;
    width: 340px;
    border-radius: ${Cssvariables.borderRaduis};
    border: none;
    height: 53px;
`
export const navConteiner = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    margin-right: 49px;
    height: 58px; 
    width: 360px;
`

export const navButton = styled.button`
    background-color: #008EEA;
    height: 53px; 
    width: 144px;
    border-radius: 30px;
    border: none;
    cursor: ${Cssvariables.cursourLink};
    
`
export const navLinks = styled.a`
    cursor: ${Cssvariables.cursourLink};
    height: 58px; 
    width: 46px;
`