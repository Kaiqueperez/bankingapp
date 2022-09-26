import * as S from './style'   
import { Icon } from '@iconify/react';
import GetAPI from '../services/GetAPI';
import { useState, useEffect } from 'react';

const FulllIncomeConteiner = () => {

    const textContent = {
        title: 'Total Income',
        option1:'All Time',
        option2:'Last Week',
        option3:'Last Month',
    }

    

    const [months, setMonths] = useState([])

    useEffect(() => {
        GetAPI().then(res => {setMonths(res)})
    }, [])

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
                    
                    {months.map(month => 
                        <S.MonthVolume key={month.Id}>
                            
                            <div style={{ backgroundColor: month.primaryColor}}></div>
                            <h5>{month.name}</h5>
                            
                        </S.MonthVolume>)}
                  
            </S.IncomeMonthsConteiner>
        </S.Conteiner>
    )
}

export default FulllIncomeConteiner



