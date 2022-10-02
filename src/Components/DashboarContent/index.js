import * as S from './style'
import FulllIncomeConteiner from '../FullIncomeConteiner/index';
import { React } from 'react';
import ProductsConteiner from '../ProductsConteiner/index';
import CommentsConteiner from '../Comments/index';



const DashBoardContent = () => {
    
    const textContent = {
        titleinit: 'Welcome to our online experience',
        
    
    }

    const aleNumbersIncome = new Uint32Array(1);
    crypto.getRandomValues(aleNumbersIncome);

    const numbersAleIncome = new Uint8Array(1);
    crypto.getRandomValues(numbersAleIncome);

    const numbersAlePercentege = new Uint8Array(1);
    crypto.getRandomValues(numbersAlePercentege);

    const numbersAleCustumer = new Uint16Array(1);
    crypto.getRandomValues(numbersAleCustumer);


    

    return(
        <>
            <S.DashboardConteiner>
                <div className='titleConteiner'>
                    <p>DashBoard</p>
                </div>

                
                <S.ConteinerOverview>
                    <S.overviewHeader>
                        <p>Overview</p>
                        <select>
                            <option>All Time</option>
                            <option>Last Week</option>
                            <option>Last Month</option>
                        </select>
                    </S.overviewHeader>

                   
                    
                    <S.overviewBody>
                        <div id='customer'>
                           
                            <div>
                            <p>Custumers</p>
                            <div className='custom-number'>{numbersAleCustumer}</div>

                            </div>
                            <div className='percentage'>{numbersAlePercentege}%</div>
                        </div>

                        <div id='income'>
                        <p>Income</p>
                            <div className='income-number'> ${aleNumbersIncome},{numbersAleIncome}</div>
                            
                        </div>
                    </S.overviewBody>

                    

                    <S.UsersMocka>
                        <h3>{textContent.titleinit}</h3>
                        <div id='UsersConteiner'>
                          
                            <img src='/fotouser.png' alt=''/>
                            <div className='Bar-bar'></div>

                            <img src='/fotouser.png' alt=''/>
                            <div className='Bar-bar'></div>
                            

                            <img src='/fotouser.png' alt=''/>
                            <div className='Bar-bar'></div>

                            <img src='/fotouser.png' alt=''/>
                            


                           
                            
                        </div>
                    </S.UsersMocka>
                    
                </S.ConteinerOverview>

                <FulllIncomeConteiner/>

                <ProductsConteiner/>

                <CommentsConteiner/>
                
                
            </S.DashboardConteiner>
        </>
    )
}

export default DashBoardContent