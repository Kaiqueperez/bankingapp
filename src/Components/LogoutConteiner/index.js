import * as S from './style';
import { Icon } from '@iconify/react';


const LogoutConteiner = () => {
    return(
        <S.Logooutconteiner>
           <div>
           <Icon className='icons' icon="ant-design:setting-outlined" />
           <p>Settings</p>
           </div>

           <div>
           <Icon className='icons' icon="ion:help-buoy-sharp" />
           <p>Help & Getting Started</p>
           </div>

           <div>
           <Icon  className='icons' icon="ri:logout-circle-line" />
           <p>Log Out</p>
           </div>
        </S.Logooutconteiner>
    )
}

export default LogoutConteiner