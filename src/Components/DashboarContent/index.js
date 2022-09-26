import * as S from './style'
import FulllIncomeConteiner from '../FullIncomeConteiner/index';
import { React } from 'react';
import ProductsConteiner from '../ProductsConteiner/index';



const DashBoardContent = () => {
    
    const textContent = {
        titleinit: 'Welcome to our online experience',
        
    
    }
   
    

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
                            <div className='custom-number'>17.656</div>

                            </div>
                            <div className='percentage'>8</div>
                        </div>

                        <div id='income'>
                        <p>Income</p>
                            <div className='income-number'> $$ 45,3737 Recebe api</div>
                            
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
                
                
            </S.DashboardConteiner>
        </>
    )
}

export default DashBoardContent