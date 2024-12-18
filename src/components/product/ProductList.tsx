import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalContext'
import { ProductItem } from './ProductItem';

export const ProductList: React.FC = () => {
    const { products } = useContext(GlobalContext);

    return (
        <div className='productList-container mt-4'>
            <div className="container">
                <div className="productList-wrapper">
                    <ul className='p-0'>
                        <div className="row g-3">
                            {products && (
                                products.map((product) => (
                                    <ProductItem item={product} key={product.id}/>
                                ))
                            )}
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
