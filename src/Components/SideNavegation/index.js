import * as S from './style'

const GridConteinerText = () => {
    const sideNavTextContent = {
        Home: 'Home',
        Products: 'Products',
        Customers: 'Customers',
        Shop:'Shop',
        Income: 'Income',
        Promotes: 'Promotes'
    }
    return(

        <S.TaskContainer>
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
                
                
            </S.SideNavegation>
            <div>2</div>
            <div>3</div>
            <div>4</div>

        </S.TaskContainer>
    )
}

export default GridConteinerText