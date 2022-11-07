import * as S from './style'
import {textContentsComments} from '../Database/index'



const CommentsConteiner = () => {

    
    return(
        <S.Commentsconteiner>
            <div >
                <p className='titleeeComent' >{textContentsComments.title}</p>
                <div className='paragraphConteiner'> 
                    <p>{textContentsComments.paragraph}</p>
                    <p>{textContentsComments.paragraphh}</p>
                </div>
            </div>

            <div className='loremconteiner'>
                <p>{textContentsComments.lorem}</p>
            </div>
        </S.Commentsconteiner>
    )

}

export default CommentsConteiner