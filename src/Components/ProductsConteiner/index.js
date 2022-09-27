import * as S from './style'
import { useEffect, useState } from 'react';
import GetProduct from '../services/GetProducts';

export default function ProductsConteiner () {
    const textContent = {
        title: 'Popular Products',
        product: 'Products',
        earnings: 'Earnings',
        BtnText: 'All Products'

    }

    const [products, setProducts] = useState([])

    useEffect(()=> {
        GetProduct().then(resp => {setProducts(resp)})
     }, [])

   
     

    return(
        <S.PopuProductsConteiner>
            <S.Titleproducts>
                <h4>{textContent.title}</h4>
                <div>
                    <p>{textContent.product}</p>
                    <p>{textContent.earnings}</p>
                </div>
                
                {products.map(prod => <S.ProductsValue key={prod.id}>
                    <div className='showCaseConteiner'>
                        <div className='showCase'>
                            <img src='/Rectangle 13.png' alt=''/>
                            
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
                <button >{textContent.BtnText}</button>
            </S.AllProductsConteiner>
        </S.PopuProductsConteiner>
    )
}