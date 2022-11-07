import * as S from './style'   
import { Icon } from '@iconify/react';
import { ChartData } from '../ChartData';
import { textContentFIC } from '../Database';

const FulllIncomeConteiner = () => {

    


    return(
        <S.Conteiner>
            <div id='Total-income-Conteiner'>
                <h4>{textContentFIC.title}</h4>
                <div className='selector-icon-conteiner'>
                <Icon icon="fluent:filter-16-filled" />
                <S.Selector>
                            <option>{textContentFIC.option1}</option>
                            <option>{textContentFIC.option2}</option>
                            <option>{textContentFIC.option3}</option>
                </S.Selector>
                
                </div>
                
            </div>
            <S.IncomeMonthsConteiner>
                    
                    <div className='chartDataConteiner'>
                        <ChartData/>
                    </div>
                    
                  
            </S.IncomeMonthsConteiner>
        </S.Conteiner>
    )
}

export default FulllIncomeConteiner


