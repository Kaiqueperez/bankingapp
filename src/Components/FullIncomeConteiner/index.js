import * as S from './style'   
import { Icon } from '@iconify/react';
import { ChartData } from '../ChartData';

const FulllIncomeConteiner = () => {

    const textContent = {
        title: 'Total Income',
        option1:'All Time',
        option2:'Last Week',
        option3:'Last Month',
    }


    return(
        <S.Conteiner>
            <div id='Total-income-Conteiner'>
                <h4>{textContent.title}</h4>
                <div className='selector-icon-conteiner'>
                <Icon icon="fluent:filter-16-filled" />
                <S.Selector>
                            <option>{textContent.option1}</option>
                            <option>{textContent.option2}</option>
                            <option>{textContent.option3}</option>
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


