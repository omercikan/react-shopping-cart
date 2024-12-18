import React, { useContext } from 'react'
import { Product } from '../types/types'
import { GlobalContext } from '../context/GlobalContext'
import { cartActionTypeEnum } from '../reducer/cartReducer'

type LikesItemProps = {
    item: Product
}

export const LikesItem: React.FC<LikesItemProps> = ({item}) => {
    const { state, dispatch } = useContext(GlobalContext);
    const { id, imageURL, price, productName, rating, reviewCount, stars, sellerName } = item;
    const findCart = state.cart.find((product) => product.id === id);

    return (
        <li className='col-12 col-lg-3 col-md-4 col-sm-6 position-relative product-item'>
            <div className="card bg-secondary">
                <div className="product-like-item position-absolute top-25 end-50">
                    <button className='bg-white border rounded-circle p-2 heart-btn' onClick={() => dispatch({ type: cartActionTypeEnum.REMOVE_LIKES, payload: id })}><i className="bi bi-x-lg"></i></button>
                </div>

                <div className="product-picture">
                    <picture>
                    <source srcSet={imageURL} type='image/webp'/>
                    <img src={imageURL} alt={productName} className='img-fluid user-select-none pe-none p-3'/>
                    </picture>
                </div>

                <div className="card-body">
                    <div className="product-title">
                    <h4 className='fs-5 text-truncate'><strong>{sellerName}</strong>  {productName}</h4>
                    </div>
        
                    <div className="product-ratings d-flex align-items-center gap-2">
                    <span className='raiting-score fs-5'>{rating}</span>
                    <div className="rating-stars">
                        <ul className='p-0'>
                        <li className='fs-6 text-warning'>
                            {stars.map((star, index) => (
                            <i className={star} key={index}></i>
                            ))}
                        </li>
                        </ul>
                    </div>
                    <span className='raition-count fs-5'>{reviewCount}</span>
                    </div>
        
                    <div className="product-price mt-4">
                    <span className='text-primary fw-medium'>{price} TL</span>
                    </div>
        
                    <button className='btn btn-primary invisible opacity-0 text-white w-100 mt-3 basket-btn' onClick={() => dispatch({type: cartActionTypeEnum.ADD_CART, payload: item})} disabled={!!findCart}>Sepete Ekle</button>
                </div>
            </div>
        </li>
    )
}
