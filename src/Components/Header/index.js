
import * as S from './style'
import { Icon } from '@iconify/react';
import { textContentHead } from '../Database';

const Header = () =>{


    return(

        
        <S.headerConteiner>
            <S.Logo>
                <img className='fefjse' src='/Tab Icon.png' alt=''/>
                <img className='kdeokds' src='/Logo.png' alt=''/>
            </S.Logo>

            <S.inputConteiner>
                <Icon icon="akar-icons:search"  className='dfodkfok'/>
                <S.inputSearch placeholder={textContentHead.inputText} />
                    
            </S.inputConteiner>
          

            <S.navConteiner>
                    
                    <S.navButton>{textContentHead.buttonText}</S.navButton>
                    <S.navLinks> <img src='/Message.png' alt='nav'/></S.navLinks>
                    
                </S.navConteiner>
            
        </S.headerConteiner>
    )
}

export default Header