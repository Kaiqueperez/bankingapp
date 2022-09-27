import * as S from './style'


const CommentsConteiner = () => {

    const textContents = {
        title: 'Comments',
        paragraph: 'Message',
        paragraphh: 'Date',
        lorem: 'Posuere lorem justo, lectus id. Id elit eget facilisis magna pulvinar volutpat bibendum cras nibh.'
    }
    return(
        <S.Commentsconteiner>
            <div >
                <p className='titleee'>{textContents.title}</p>
                <div className='paragraphConteiner'> 
                    <p>{textContents.paragraph}</p>
                    <p>{textContents.paragraphh}</p>
                </div>
            </div>

            <div className='loremconteiner'>
                <p>{textContents.lorem}</p>
            </div>
        </S.Commentsconteiner>
    )

}

export default CommentsConteiner