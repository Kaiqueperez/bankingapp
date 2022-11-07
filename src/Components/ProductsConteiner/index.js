import * as S from './style'
import { useEffect, useState } from 'react';
import GetProduct from '../services/GetProducts';
import { textContentPC } from '../Database';

export default function ProductsConteiner() {
    

    const [products, setProducts] = useState([])

    useEffect(() => {
        GetProduct().then(resp => { setProducts(resp) })
    }, [])




    return (
        <S.PopuProductsConteiner>
            <S.Titleproducts>
                <h4>{textContentPC.title}</h4>
                <div>
                    <p>{textContentPC.product}</p>
                    <p>{textContentPC.earnings}</p>
                </div>

                {products.map(prod => <S.ProductsValue key={prod.id}>
                    <div className='showCaseConteiner'>
                        <div className='showCase'>
                            <img src='/Rectangle 13.png' alt='' />

                            <div className='productInfo'>
                                <p>{prod.name}</p>
                                <p>{prod.category}</p>
                            </div>
                        </div>

                    </div>
                    <p>{prod.price}</p>
                </S.ProductsValue>)}

            </S.Titleproducts>

            <S.AllProductsConteiner>

                <div></div>
                <button >{textContentPC.BtnText}</button>
            </S.AllProductsConteiner>
        </S.PopuProductsConteiner>
    )
}