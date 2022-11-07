import * as S from './style'
import DashBoardContent from '../DashboarContent/index';
import LogoutConteiner from '../LogoutConteiner/index';
import { sideNavTextContent } from '../Database';




const Dashboard = () => {

    
    return(

        <S.TaskContainer >
            <S.SideNavegation>
                <S.sidenavHome>
                    <img src='/Vector.png' alt=''/>
                    <p>{sideNavTextContent.Home}</p>
                </S.sidenavHome>
                <S.sidenavProducts>
                    <div className='sjdisjd'>

                    <img src='/Vector.png' alt=''/>
                    <p>{sideNavTextContent.Products}</p>

                    </div>
                    <div>
                        
                        <img className='arrowdown' src='/eva_arrow-ios-downward-fill.png' alt=''/>
                        
                    </div>
                </S.sidenavProducts>

                <S.sidenavCustomers>
                    <div className='sjdisjd'>

                    <img src='/Vector.png' alt=''/>
                    <p>{sideNavTextContent.Customers}</p>

                    </div>
                    <div>
                        
                        <img className='arrowdown' src='/eva_arrow-ios-downward-fill.png' alt=''/>
                        
                    </div>
                </S.sidenavCustomers>

                <S.sidenavShop>
                    <div className='sjdisjd'>

                    <img src='/Vector.png' alt=''/>
                    <p>{sideNavTextContent.Shop}</p>

                    </div>
                    <div>
                        
                        <img className='arrowdown' src='/eva_arrow-ios-downward-fill.png' alt=''/>
                        
                    </div>
                </S.sidenavShop>

                <S.sidenavIncome>
                    <div className='sjdisjd'>

                    <img src='/Vector.png' alt=''/>
                    <p>{sideNavTextContent.Income}</p>

                    </div>
                    <div>
                        
                        <img className='arrowdown' src='/eva_arrow-ios-downward-fill.png' alt=''/>
                        
                    </div>
                </S.sidenavIncome>

                <S.sidenavPromotes>
                    <div className='sjdisjd'>

                    <img src='/Vector.png' alt=''/>
                    <p>{sideNavTextContent.Promotes}</p>

                    </div>
                    <div>
                        
                        <img className='arrowdown' src='/eva_arrow-ios-downward-fill.png' alt=''/>
                        
                    </div>
                </S.sidenavPromotes>

               <LogoutConteiner/>
                
            </S.SideNavegation>

            <DashBoardContent/>
            
            
            
            

        </S.TaskContainer>
    )
}

export default Dashboard