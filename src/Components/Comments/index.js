import * as S from './style'
import {textContentsComments} from '../Database/index'



const CommentsConteiner = () => {

    
    return(
        <S.Commentsconteiner>
            <S.CommentsContent >
                <p className='titleeeComent' >{textContentsComments.title}</p>
                <div className='paragraphConteiner'> 
                    <p>{textContentsComments.paragraph}</p>
                    <p>{textContentsComments.paragraphh}</p>
                </div>
            </S.CommentsContent>

            <S.LoremConteiner >
                <p>{textContentsComments.lorem}</p>
            </S.LoremConteiner>
        </S.Commentsconteiner>
    )

}

export default CommentsConteiner