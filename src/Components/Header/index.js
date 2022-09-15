
import * as S from './style'

import { Icon } from '@iconify/react';




const Header = () =>{


    const textContent = {
        inputText: 'Search',
        buttonText: '+ Create'
    
    }
    return(

        
        <S.headerConteiner>
            <S.Logo>
                <img className='fefjse' src='/Tab Icon.png' alt=''/>
                <img className='kdeokds' src='/Logo.png' alt=''/>
            </S.Logo>

        
            <><Icon icon="akar-icons:search"  className='dfodkfok'/></>
            <S.inputSearch placeholder={textContent.inputText}>
                
            </S.inputSearch>
            <S.navConteiner>
                    <S.navButton>{textContent.buttonText}</S.navButton>
                    <S.navLinks> <img src='/Message.png' alt='nav'/></S.navLinks>
                    
                </S.navConteiner>
            
        </S.headerConteiner>
    )
}

export default Header