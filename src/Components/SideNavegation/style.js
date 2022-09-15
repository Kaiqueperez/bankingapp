import styled from "styled-components";


const Cssvariables = {
    borderRaduis: '30px',
    cursourLink: 'pointer'
}

export const TaskContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr repeat(1, 8fr);
  grid-template-rows: 1fr ;
  margin: 2rem 0 0 2rem;
  @media (max-width: 48rem) {
    margin: 2rem 0 0 0.5rem;
  }
`;

export const SideNavegation = styled.div`

        
`
export const sidenavHome = styled.div`
    display: flex;
    background-color: #E5E5E5;
    height: 53px;
    gap: 20px;
    align-items: center;
    border-radius: ${Cssvariables.borderRaduis};
    


    img{
        width: 30px;
        height: 30px;
        margin-left: 11px;
    }
    

`
export const sidenavProducts = styled.div`
    display: flex;
    height: 53px;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    


    img{
        width: 30px;
        height: 30px;
        margin-left: 11px;
    }

    .sjdisjd{
        display: flex;
    gap: 20px;
    align-items: center;
    }
    
    
    

`
export const sidenavCustomers = styled.div`
    display: flex;
    height: 53px;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    


    img{
        width: 30px;
        height: 30px;
        margin-left: 11px;
    }

    .sjdisjd{
        display: flex;
    gap: 20px;
    align-items: center;
    }
    
    
    

`
export const sidenavShop = styled.div`
    display: flex;
    height: 53px;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    


    img{
        width: 30px;
        height: 30px;
        margin-left: 11px;
    }

    .sjdisjd{
        display: flex;
    gap: 20px;
    align-items: center;
    }
    
    
    

`
export const sidenavIncome = styled.div`
    display: flex;
    height: 53px;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    


    img{
        width: 30px;
        height: 30px;
        margin-left: 11px;
    }

    .sjdisjd{
        display: flex;
    gap: 20px;
    align-items: center;
    }
    
    
    

`
export const sidenavPromotes = styled.div`
    display: flex;
    height: 53px;
    gap: 20px;
    align-items: center;
    justify-content: space-between;
    


    img{
        width: 30px;
        height: 30px;
        margin-left: 11px;
    }

    .sjdisjd{
        display: flex;
    gap: 20px;
    align-items: center;
    }
    
    
    

`
// Customers, Shop, Income, Promotes
